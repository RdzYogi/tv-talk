import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="profile-tabs"
export default class extends Controller {
  static targets = [ "followedMovies", "followedUsers", "posts", "notifications", "buttonFollowedMovies", "buttonFollowedUsers", "buttonPosts", "buttonNotifications" ]

  connect() {
    console.log("ProfileTabsController connected")
    this.buttonFollowedMoviesTarget.classList.add("btn-profile-tab-active")
  }

  showFollowedMovies() {
    this.buttonFollowedMoviesTarget.classList.add("btn-profile-tab-active")
    this.buttonFollowedUsersTarget.classList.remove("btn-profile-tab-active")
    this.buttonPostsTarget.classList.remove("btn-profile-tab-active")
    this.buttonNotificationsTarget.classList.remove("btn-profile-tab-active")
    this.followedMoviesTarget.classList.remove("d-none")
    this.followedUsersTarget.classList.add("d-none")
    this.postsTarget.classList.add("d-none")
    this.notificationsTarget.classList.add("d-none")
  }

  showFollowedUsers() {
    this.buttonFollowedMoviesTarget.classList.remove("btn-profile-tab-active")
    this.buttonFollowedUsersTarget.classList.add("btn-profile-tab-active")
    this.buttonPostsTarget.classList.remove("btn-profile-tab-active")
    this.buttonNotificationsTarget.classList.remove("btn-profile-tab-active")
    this.followedMoviesTarget.classList.add("d-none")
    this.followedUsersTarget.classList.remove("d-none")
    this.postsTarget.classList.add("d-none")
    this.notificationsTarget.classList.add("d-none")
  }

  showPosts() {
    this.buttonFollowedMoviesTarget.classList.remove("btn-profile-tab-active")
    this.buttonFollowedUsersTarget.classList.remove("btn-profile-tab-active")
    this.buttonPostsTarget.classList.add("btn-profile-tab-active")
    this.buttonNotificationsTarget.classList.remove("btn-profile-tab-active")
    this.followedMoviesTarget.classList.add("d-none")
    this.followedUsersTarget.classList.add("d-none")
    this.postsTarget.classList.remove("d-none")
    this.notificationsTarget.classList.add("d-none")
  }

  showNotifications() {
    this.buttonFollowedMoviesTarget.classList.remove("btn-profile-tab-active")
    this.buttonFollowedUsersTarget.classList.remove("btn-profile-tab-active")
    this.buttonPostsTarget.classList.remove("btn-profile-tab-active")
    this.buttonNotificationsTarget.classList.add("btn-profile-tab-active")
    this.followedMoviesTarget.classList.add("d-none")
    this.followedUsersTarget.classList.add("d-none")
    this.postsTarget.classList.add("d-none")
    this.notificationsTarget.classList.remove("d-none")
  }

}
