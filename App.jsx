
import { useEffect, useState } from 'react'
import './index.css'
import Register from './Register'
import Login from './Login'

const API = 'http://localhost:8080/api/jobs'

const categories = [
  'Java Developer',
  'React Developer',
  'Python Developer',
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Developer'
]

export default function App() {
  const [jobs, setJobs] = useState([])
  const [keyword, setKeyword] = useState('')
  const [location, setLocation] = useState('')
  const [message, setMessage] = useState('')
  const [jobForm, setJobForm] = useState({
    title: '',
    company: '',
    location: '',
    description: ''
  })
  const [applyFor, setApplyFor] = useState(null)
  const [applicant, setApplicant] = useState({
    applicantName: '',
    email: '',
    resumeUrl: ''
  })
  const [selectedJob, setSelectedJob] = useState(null)
  const [applications, setApplications] = useState([])

  async function loadJobs() {
    const params = new URLSearchParams()
    if (keyword.trim()) params.set('keyword', keyword)
    if (location.trim()) params.set('location', location)

    try {
      const response = await fetch(`${API}?${params}`)
      if (!response.ok) throw new Error('Could not load jobs. Check the backend.')

      setJobs(await response.json())
      setMessage('')
    } catch (error) {
      setMessage(error.message)
    }
  }

  useEffect(() => {
    loadJobs()
  }, [])

  async function postJob(event) {
    event.preventDefault()

    try {
      const response = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jobForm)
      })

      if (!response.ok) throw new Error('Job could not be posted.')

      setJobForm({
        title: '',
        company: '',
        location: '',
        description: ''
      })

      setMessage('Your job has been published successfully!')
      await loadJobs()
    } catch (error) {
      setMessage(error.message)
    }
  }

  async function apply(event) {
    event.preventDefault()

    try {
      const response = await fetch(`${API}/${applyFor}/applications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(applicant)
      })

      if (!response.ok) {
        const result = await response.json().catch(() => ({}))
        throw new Error(
          result.message || result.error || 'Application could not be submitted.'
        )
      }

      setMessage('Your application has been submitted successfully!')
      setApplyFor(null)
      setApplicant({
        applicantName: '',
        email: '',
        resumeUrl: ''
      })
    } catch (error) {
      setMessage(error.message)
    }
  }

  async function viewApplications(job) {
    try {
      const response = await fetch(`${API}/${job.id}/applications`)
      if (!response.ok) throw new Error('Could not load applications.')

      const data = await response.json()
      setSelectedJob(job)
      setApplications(data)
      setMessage('')
    } catch (error) {
      setMessage(error.message)
    }
  }

  function searchCategory(category) {
    setKeyword(category)
    setLocation('')

    const params = new URLSearchParams()
    params.set('keyword', category)

    fetch(`${API}?${params}`)
      .then(response => {
        if (!response.ok) throw new Error('Could not search jobs.')
        return response.json()
      })
      .then(data => {
        setJobs(data)
        setMessage('')
      })
      .catch(error => setMessage(error.message))

    document.getElementById('jobs')?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <main className="site-shell">

      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="brand">
          <span className="brand-mark">C</span>
          Career<span>Nest</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#jobs">Find Jobs</a>
          <a href="#categories">Categories</a>
          <a href="#recruiter">For Recruiters</a>
           <a href="#register">Register</a>
           <a href="#login">Login</a>
        </div>

        <a href="#recruiter" className="nav-cta">
          Post a Job <span>↗</span>
        </a>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-tag">
            <span className="live-dot"></span>
            YOUR NEXT OPPORTUNITY STARTS HERE
          </div>

          <h1>
            Find work that
            <br />
            <span>moves you forward.</span>
          </h1>

          <p className="hero-description">
            Discover meaningful opportunities, connect with great companies,
            and take the next step in your career.
          </p>

          <div className="hero-search">
            <div className="search-field">
              <span className="search-icon">⌕</span>
              <div>
                <label>WHAT ARE YOU LOOKING FOR?</label>
                <input
                  placeholder="Job title or company"
                  value={keyword}
                  onChange={e => setKeyword(e.target.value)}
                />
              </div>
            </div>

            <div className="search-divider"></div>

            <div className="search-field">
              <span className="search-icon">⌖</span>
              <div>
                <label>WHERE?</label>
                <input
                  placeholder="City or location"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                />
              </div>
            </div>

            <button className="hero-search-button" onClick={loadJobs}>
              Search jobs <span>→</span>
            </button>
          </div>

          <p className="popular-searches">
            Popular: Java Developer · React · Python · Full Stack
          </p>
        </div>

        <div className="hero-decoration">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="hero-symbol">C</div>
          <div className="floating-note">
            <span className="note-icon">✦</span>
            <div>
              <strong>Make your next move</strong>
              <small>Your career, your direction.</small>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>BUILT FOR YOUR NEXT CHAPTER</span>
          <span>DISCOVER · CONNECT · GROW</span>
        </div>
      </section>

      {message && (
        <div className="notice">
          <span>{message}</span>
          <button onClick={() => setMessage('')}>×</button>
        </div>
      )}

      {/* Quick statistics */}
      <section className="stats-row">
        <div>
          <strong>{jobs.length}+</strong>
          <span>Jobs currently listed</span>
        </div>
        <div>
          <strong>Easy</strong>
          <span>Simple applications</span>
        </div>
        <div>
          <strong>One place</strong>
          <span>Explore career opportunities</span>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section" id="categories">
        <div className="section-heading">
          <div>
            <span className="section-kicker">EXPLORE YOUR PATH</span>
            <h2>Find your <span>field.</span></h2>
            <p>Explore opportunities in the areas you love.</p>
          </div>
          <span className="heading-number">01 / CATEGORIES</span>
        </div>

        <div className="category-grid">
          {categories.map((category, index) => (
            <button
              className="category-card"
              key={category}
              onClick={() => searchCategory(category)}
            >
              <span className="category-number">0{index + 1}</span>
              <strong>{category}</strong>
              <span className="category-arrow">↗</span>
            </button>
          ))}
        </div>
      </section>

      {/* Job listings */}
      <section className="jobs-section" id="jobs">
        <div className="section-heading">
          <div>
            <span className="section-kicker">FRESH OPPORTUNITIES</span>
            <h2>Explore open <span>roles.</span></h2>
            <p>Find a role that matches your skills and ambition.</p>
          </div>
          <span className="job-count">{jobs.length} jobs found</span>
        </div>

        {jobs.length === 0 ? (
          <div className="empty-state">
            <h3>No jobs found</h3>
            <p>Try another keyword or location to explore more opportunities.</p>
            <button
              onClick={() => {
                setKeyword('')
                setLocation('')
                loadJobs()
              }}
            >
              Show all jobs
            </button>
          </div>
        ) : (
          <div className="job-grid">
            {jobs.map(job => (
              <article className="job-card" key={job.id}>
                <div className="job-card-top">
                  <div className="company-avatar">
                    {job.company?.charAt(0)?.toUpperCase() || 'C'}
                  </div>
                  <span className="job-status">OPEN ROLE</span>
                </div>

                <h3>{job.title}</h3>
                <p className="job-company">{job.company}</p>

                <div className="job-meta">
                  <span>⌖ {job.location}</span>
                  <span>Full-time opportunity</span>
                </div>

                <p className="job-description">
                  {job.description || 'Explore this opportunity and take the next step in your career.'}
                </p>

                <div className="job-card-footer">
                  <button
                    className="apply-button"
                    onClick={() => setApplyFor(job.id)}
                  >
                    Apply now <span>→</span>
                  </button>

                  <button
                    className="view-button"
                    onClick={() => viewApplications(job)}
                  >
                    Applicants
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Recruiter section */}
      <section className="recruiter-section" id="recruiter">
        <div className="recruiter-copy">
          <span className="section-kicker">FOR EMPLOYERS</span>
          <h2>
            Find the people
            <br />
            who <span>move business forward.</span>
          </h2>
          <p>
            Share your opportunity and connect with people ready
            to bring their skills to your team.
          </p>
          <div className="recruiter-points">
            <span>✓ Publish job opportunities</span>
            <span>✓ Receive candidate applications</span>
            <span>✓ Review applicant details</span>
          </div>
        </div>

        <div className="recruiter-form-wrap">
          <h3>Publish a new opportunity</h3>
          <p>Enter the details of your open position.</p>

          <form onSubmit={postJob} className="recruiter-form">
            <input
              required
              placeholder="Job title"
              value={jobForm.title}
              onChange={e => setJobForm({ ...jobForm, title: e.target.value })}
            />

            <input
              required
              placeholder="Company name"
              value={jobForm.company}
              onChange={e => setJobForm({ ...jobForm, company: e.target.value })}
            />

            <input
              required
              placeholder="Job location"
              value={jobForm.location}
              onChange={e => setJobForm({ ...jobForm, location: e.target.value })}
            />

            <textarea
              placeholder="Describe the opportunity..."
              value={jobForm.description}
              onChange={e => setJobForm({ ...jobForm, description: e.target.value })}
            />

            <button type="submit">
              Publish opportunity <span>→</span>
            </button>
          </form>
        </div>
      </section>

      {/* Applications panel */}
      {selectedJob && (
        <section className="applications-section" id="applications">
          <div className="section-heading">
            <div>
              <span className="section-kicker">RECRUITER WORKSPACE</span>
              <h2>Candidate <span>applications.</span></h2>
              <p>
                {selectedJob.title} · {selectedJob.company}
              </p>
            </div>
            <span className="job-count">
              {applications.length} applicants
            </span>
          </div>

          {applications.length === 0 ? (
            <p className="empty-state">No applications received for this job yet.</p>
          ) : (
            <div className="applicant-grid">
              {applications.map(application => (
                <article className="applicant-card" key={application.id}>
                  <div className="applicant-avatar">
                    {application.applicantName?.charAt(0)?.toUpperCase() || 'A'}
                  </div>
                  <h3>{application.applicantName}</h3>
                  <p>{application.email}</p>
                  <p>
                    Resume: {application.resumeUrl || 'Not provided'}
                  </p>
                  <small>Applied: {application.appliedAt}</small>
                </article>
              ))}
            </div>
          )}

          <button
            className="close-applications"
            onClick={() => {
              setSelectedJob(null)
              setApplications([])
            }}
          >
            Close applications
          </button>
        </section>
      )}

      {/* Application modal */}
      {applyFor && (
        <div className="modal" onClick={() => setApplyFor(null)}>
          <form
            className="application-modal"
            onSubmit={apply}
            onClick={event => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setApplyFor(null)}
            >
              ×
            </button>

            <span className="section-kicker">TAKE THE NEXT STEP</span>
            <h2>Apply for this role.</h2>
            <p>Share your details with the hiring team.</p>

            <input
              required
              placeholder="Your full name"
              value={applicant.applicantName}
              onChange={e => setApplicant({
                ...applicant,
                applicantName: e.target.value
              })}
            />

            <input
              required
              type="email"
              placeholder="Your email address"
              value={applicant.email}
              onChange={e => setApplicant({
                ...applicant,
                email: e.target.value
              })}
            />

            <input
              placeholder="Resume URL (optional)"
              value={applicant.resumeUrl}
              onChange={e => setApplicant({
                ...applicant,
                resumeUrl: e.target.value
              })}
            />

            <button type="submit" className="apply-button modal-submit">
              Submit application →
            </button>

            <small>Your information will be shared with the recruiter.</small>
          </form>
        </div>
      )}

        {/* Registration Section */}
<section id="register">
  <Register />
</section>

<section id="login">
  <Login />
</section>
      {/* Footer */}
      <footer className="site-footer">

        <a href="#home" className="brand footer-brand">
          <span className="brand-mark">C</span>
          Career<span>Nest</span>
        </a>
        <p>Discover your next chapter. Build your future.</p>
        <span>© 2026 CareerNest · React + Spring Boot + MySQL</span>
      </footer>

    </main>
  )
}
