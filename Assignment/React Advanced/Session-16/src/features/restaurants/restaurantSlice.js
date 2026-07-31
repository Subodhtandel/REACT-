import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// Async Thunk
export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async (city = "") => {
    const response = await fetch(
      "https://dummyjson.com/products"
    )

    if (!response.ok) {
      throw new Error("Failed to fetch restaurants")
    }

    const data = await response.json()

    // Filter by city if provided
    if (city.trim() !== "") {
      return data.filter(
        (restaurant) =>
          restaurant.city &&
          restaurant.city.toLowerCase() === city.toLowerCase()
      )
    }

    return data
  }
)

const restaurantSlice = createSlice({
  name: "restaurants",

  initialState: {
    list: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchRestaurants.pending, (state) => {
        state.loading = true
        state.error = null
      })

      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload
      })

      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default restaurantSlice.reducer