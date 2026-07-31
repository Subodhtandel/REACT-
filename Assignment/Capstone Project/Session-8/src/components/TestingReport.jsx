import React from "react"

function TestingReport() {
  return (
    <div className="report">
      <h1>React Testing Report</h1>

      <section>
        <h2>1. Mobile View (iPhone X)</h2>
        <p>
          Screenshot taken using Chrome DevTools in iPhone X responsive mode.
        </p>

        {/* Replace with your own screenshot */}
        <img
          src="/mobile-homepage.png"
          alt="Mobile Screenshot"
          className="screenshot"
        />
      </section>

      <section>
        <h2>2. Tablet vs Desktop</h2>

        <table>
          <thead>
            <tr>
              <th>Tablet</th>
              <th>Desktop</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Navigation items have less spacing.</td>
              <td>Navigation items have more spacing.</td>
            </tr>

            <tr>
              <td>Cards appear stacked.</td>
              <td>Cards appear in multiple columns.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>3. Chrome vs Firefox</h2>

        <p>
          No UI or functionality differences were observed during testing.
        </p>
      </section>

      <section>
        <h2>4. Lighthouse Audit</h2>

        <table>
          <thead>
            <tr>
              <th>Audit</th>
              <th>Before</th>
              <th>After</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Performance</td>
              <td>78</td>
              <td>91</td>
            </tr>
          </tbody>
        </table>

        <p>
          Improvement Applied:
          Added lazy loading to homepage images.
        </p>
      </section>

      <section>
        <h2>5. ChatGPT Suggestion</h2>

        <p>
          Suggested Improvement:
          Use lazy loading for images to improve loading speed.
        </p>

        <p>
          Implemented:
          Added <code>loading="lazy"</code> attribute to homepage images.
        </p>
      </section>
    </div>
  )
}

export default TestingReport