import { Formik, Form, Field } from "formik"
import * as Yup from "yup"

const validationSchema = Yup.object({
  playlistName: Yup.string()
    .required("Playlist Name is required"),

  description: Yup.string(),

  genre: Yup.string()
    .required("Genre is required"),
})

function PlaylistForm() {
  return (
    <div>

      <h2>Create Playlist</h2>

      <Formik
        initialValues={{
          playlistName: "",
          description: "",
          genre: "",
        }}

        validationSchema={validationSchema}

        onSubmit={(values) => {
          console.log(values)
          alert("Playlist Created")
        }}
      >
        {({
          errors,
          touched,
        }) => (
          <Form>

            <Field
              name="playlistName"
              placeholder="Playlist Name"
            />

            <br />

            {touched.playlistName &&
              errors.playlistName && (
                <div style={{ color: "red" }}>
                  {errors.playlistName}
                </div>
              )}

            <br />

            <Field
              as="textarea"
              name="description"
              placeholder="Description"
            />

            <br /><br />

            <Field
              as="select"
              name="genre"
            >
              <option value="">
                Select Genre
              </option>

              <option value="Pop">
                Pop
              </option>

              <option value="Rock">
                Rock
              </option>

              <option value="Hip Hop">
                Hip Hop
              </option>

              <option value="Classical">
                Classical
              </option>

            </Field>

            <br />

            {touched.genre &&
              errors.genre && (
                <div style={{ color: "red" }}>
                  {errors.genre}
                </div>
              )}

            <br />

            <button type="submit">
              Create Playlist
            </button>

          </Form>
        )}
      </Formik>

    </div>
  )
}

export default PlaylistForm