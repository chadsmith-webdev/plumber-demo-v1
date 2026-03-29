/* ============================================================
   Razorback Plumbing Co. — Main JS
   ============================================================ */

(function () {
  "use strict";

  // ----- Header scroll behavior -----
  const header = document.getElementById("header");
  if (header) {
    let lastScroll = 0;
    window.addEventListener(
      "scroll",
      function () {
        const scrollY = window.scrollY;
        if (scrollY > 20) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
        lastScroll = scrollY;
      },
      { passive: true },
    );
  }

  // ----- Mobile nav toggle -----
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  const navOverlay = document.getElementById("navOverlay");

  function openNav() {
    nav.classList.add("open");
    navToggle.classList.add("open");
    if (navOverlay) navOverlay.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function closeNav() {
    nav.classList.remove("open");
    navToggle.classList.remove("open");
    if (navOverlay) navOverlay.classList.remove("show");
    document.body.style.overflow = "";
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      if (nav.classList.contains("open")) {
        closeNav();
      } else {
        openNav();
      }
    });
  }

  if (navOverlay) {
    navOverlay.addEventListener("click", closeNav);
  }

  // Close nav on link click (mobile)
  var navLinks = document.querySelectorAll(".nav__link");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (nav && nav.classList.contains("open")) {
        closeNav();
      }
    });
  });

  // ----- FAQ accordion -----
  var faqItems = document.querySelectorAll(".faq__item");
  faqItems.forEach(function (item) {
    var question = item.querySelector(".faq__question");
    if (question) {
      question.addEventListener("click", function () {
        var wasOpen = item.classList.contains("open");

        // Close all others
        faqItems.forEach(function (other) {
          other.classList.remove("open");
        });

        // Toggle clicked
        if (!wasOpen) {
          item.classList.add("open");
        }
      });
    }
  });

  // ----- Scroll reveal animations -----
  var revealElements = document.querySelectorAll(".reveal");
  if (revealElements.length > 0 && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything
    revealElements.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  // ----- Smooth scroll for same-page anchors -----
  document.addEventListener("click", function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;
    var targetId = link.getAttribute("href");
    if (targetId === "#") return;
    var target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      var headerHeight = header ? header.offsetHeight : 0;
      var top =
        target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
      window.scrollTo({ top: top, behavior: "smooth" });
    }
  });

  // ----- Active nav link highlighting -----
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  var allNavLinks = document.querySelectorAll(".nav__link");
  allNavLinks.forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
})();
