document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const nav = document.querySelector("nav")

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      nav.style.display = nav.style.display === "block" ? "none" : "block"
    })
  }

  // Auth tabs
  const authTabs = document.querySelectorAll(".auth-tab")
  const authForms = document.querySelectorAll(".auth-form")

  authTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab")

      // Remove active class from all tabs and forms
      authTabs.forEach((t) => t.classList.remove("active"))
      authForms.forEach((f) => f.classList.remove("active"))

      // Add active class to current tab and form
      this.classList.add("active")
      document.getElementById(tabId + "-form").classList.add("active")
    })
  })

  // Billing tabs
  const tabBtns = document.querySelectorAll(".tab-btn")
  const tabPanes = document.querySelectorAll(".tab-pane")

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab")

      // Remove active class from all buttons and panes
      tabBtns.forEach((b) => b.classList.remove("active"))
      tabPanes.forEach((p) => p.classList.remove("active"))

      // Add active class to current button and pane
      this.classList.add("active")
      document.getElementById(tabId).classList.add("active")
    })
  })

  // Appointment booking
  const bookBtns = document.querySelectorAll(".book-btn")
  const appointmentModal = document.getElementById("appointmentModal")
  const closeModal = document.querySelector(".close-modal")

  if (bookBtns.length > 0 && appointmentModal) {
    bookBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        appointmentModal.style.display = "flex"

        // Get doctor name from the card
        const doctorCard = this.closest(".doctor-card")
        const doctorName = doctorCard.querySelector("h4").textContent
        const specialty = doctorCard.querySelector(".specialty").textContent

        // Set the doctor name in the form
        document.getElementById("selected-doctor").value = doctorName + " - " + specialty
      })
    })

    closeModal.addEventListener("click", () => {
      appointmentModal.style.display = "none"
    })

    // Close modal when clicking outside
    window.addEventListener("click", (event) => {
      if (event.target === appointmentModal) {
        appointmentModal.style.display = "none"
      }
    })
  }

  // Form submissions
  const loginForm = document.getElementById("login")
  const signupForm = document.getElementById("signup")
  const appointmentForm = document.getElementById("appointment-form")

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault()
      // In a real application, you would send the form data to the server
      alert("Login functionality would be implemented in a real application.")
    })
  }

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault()
      // Validate password match
      const password = document.getElementById("signup-password").value
      const confirmPassword = document.getElementById("confirm-password").value

      if (password !== confirmPassword) {
        alert("Passwords do not match!")
        return
      }

      // In a real application, you would send the form data to the server
      alert("Sign up functionality would be implemented in a real application.")
    })
  }

  if (appointmentForm) {
    appointmentForm.addEventListener("submit", (e) => {
      e.preventDefault()
      // In a real application, you would send the form data to the server
      alert("Your appointment has been scheduled! In a real application, this would save to a database.")
      appointmentModal.style.display = "none"
    })
  }

  // FAQ accordion
  const faqQuestions = document.querySelectorAll(".faq-question")

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling

      if (answer.style.display === "block") {
        answer.style.display = "none"
        this.classList.remove("active")
      } else {
        answer.style.display = "block"
        this.classList.add("active")
      }
    })
  })
})
