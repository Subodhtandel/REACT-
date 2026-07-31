import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <h2>Loading countries...</h2>;
  if (error) return <h2>Error: {error.message}</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Countries with Flags</h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {data.countries.map((country) => (
          <li
            key={country.code}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            <img
              src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
              alt={`${country.name} flag`}
              width="40"
              height="30"
            />

            <span>{country.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;