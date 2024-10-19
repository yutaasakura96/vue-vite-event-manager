## 📅 Vue Event Booking Manager

The **Vue Event Booking Manager** is a Vue.js fictional personal booking manager web application that allows users to browse available events coming from the Ticketmaster Discovery API and manage their bookings. It provides a simple interface where users can register for events, view their bookings, and cancel bookings as needed.

## 📖 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Recommended IDE Setup](#recommended-ide-setup)
- [Customize Configuration](#customize-configuration)
- [Contributing](#contributing)
- [Linting and Formatting](#linting-and-formatting)

## ✨ Features

- 🗂️ **Event Browsing:** Users can browse a list of available events that come from the Ticketmaster Discovery API.
- 📝 **Bookings Management:** View and manage all personal event bookings.
- ❌ **Cancellation:** Users can cancel their bookings directly from the app.
- ⚠️ **Error Handling:** Displays user-friendly error messages when fetching data fails.
- ⏳ **Loading States:** Shows skeleton UI components while data is being loaded.
- 📄 **Pagination:** Easily navigate through multiple pages of events using the Radix Vue library.
- 🔧 **Composable Functions:** Utilize composables for handling booking logic.
- ♻️ **Reusable Components:** Implement reusable components for a consistent UI.
- 🚀 **Optimistic UI Updates:** Experience immediate UI feedback during interactions.
- 📱 **Responsive Web Design:** The app is fully responsive and adapts to various screen sizes, ensuring a smooth experience on mobile, tablet, and desktop devices.
- 🎨 **Tailwind CSS Styling:** Rapid UI development with a consistent design system.
- 🛠️ **Prettier & ESLint:** Maintain code quality and consistency.
- 💾 **LocalStorage Saving:** Automatically saves bookings locally to persist across browser sessions.
- ✅ **Pending and Confirmed States:** Visual indicators of booking statuses using **Lucide Icons**.

## 🛠️ Technologies Used

This project utilizes a combination of modern tools, frameworks, and libraries to ensure efficient development, smooth user experience, and maintainable code:

- 🌐 **[Vue 3](https://vuejs.org/):** The progressive JavaScript framework used for building the app's UI.
- ⚡ **[Vite](https://vitejs.dev/):** A fast and modern build tool that provides a lightning-fast development environment.
- 🌍 **[Vercel](https://vercel.com/):** Deployment platform for hosting the project with automatic builds and easy integration.
- 🎨 **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework that enables rapid UI development with a consistent design system.
- ✨ **[Prettier](https://prettier.io/):** A code formatter used to enforce a consistent code style throughout the project.
- 🔍 **[ESLint](https://eslint.org/):** A linter tool for identifying and fixing code quality issues.
- 🎟️ **[Ticketmaster API](https://developer.ticketmaster.com/):** The API used to fetch event data for the app.
- 💾 **LocalStorage:** Provides persistent storage for user bookings across browser sessions.
- 🧩 **[Radix Vue](https://radix-vue.com/):** A component library that helps with building accessible, high-quality UI elements.
- 🖼️ **[Lucide Icons](https://lucide.dev/):** A library of beautiful and customizable icons used throughout the app.
- 
## 🗂️ Project Structure

The project's structure is organized into components, composables, and the main application file:

```plaintext
src/
├── components/
│   ├── BookingItem.vue          # Displays individual booking details
│   ├── BookingList.vue          # Displays a list of user bookings
│   ├── EventList.vue            # Displays a list of all events
│   ├── EventCard.vue            # Displays event details (title, location, etc.)
│   ├── LoadingBookingItem.vue   # Placeholder for loading bookings
│   ├── LoadingEventCard.vue     # Placeholder for loading events
│   ├── ErrorCard.vue            # Error message with retry functionality
│   ├── PaginationComponent.vue  # Pagination controls for navigating events
│   └── SectionCard.vue          # Layout component for wrapping content in a card format
├── composables/
│   └── useBookings.js           # Handles booking logic (registration, cancellation, fetching)
└── App.vue                      # Main application component
```

# 🚀 Installation

To run this project locally, follow these steps:

1.	Clone the repository:
```ssh
git clone https://github.com/yourusername/event-booking-manager.git
cd event-booking-manager
```

2.	Install dependencies:
```ssh
npm install
```

3.	Compile and Hot-Reload for Development:
```ssh
npm run dev
```

4.	Compile and Minify for Production:
```ssh
npm run build
```

5.	Lint the project:
```ssh
npm run lint
```


# 🎯 Usage

Once the app is running, users can:

- Browse events: View a list of available events retrieved from the Ticketmaster Discovery API.
- Register for events: Add event registrations, which are saved locally.
- View bookings: See all booked events in a clean, organized list.
- Cancel bookings: Remove bookings easily by clicking the cancel button.

# 🌍 Deployment

This project has been deployed on Vercel.

You can view the live project here (replace with your actual Vercel deployment URL).

To deploy this project on Vercel, follow these steps:

1.	Build the Project:
```ssh
npm run build
```
2.	Push to GitHub or GitLab: Ensure your project is pushed to a repository.
3.	Connect to Vercel:
- Go to Vercel.
- Connect your repository.
- Vercel will automatically detect the project as a Vite-based Vue.js app.
4.	Set the Build Command:
```ssh
npm run build
```

5.	Set the Output Directory:
```ssh
dist
```
6.	Deploy: Click deploy, and Vercel will handle the rest.

# 💻 Recommended IDE Setup

For the best development experience, we recommend using Visual Studio Code with the Volar extension:

[Visual Studio Code](https://code.visualstudio.com/)
**[Volar Extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar)** or the **[Official Vue Extension](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)** (Make sure to disable Vetur if you have it installed).

# 🔧 Customize Configuration

[See the Vite Configuration Reference](https://vitejs.dev/config/) for more details on how to customize the project’s configuration.

# 🤝 Contributing

Contributions are welcome! Feel free to fork this repository, create a new branch, and submit a pull request with your improvements.

# 🧹 Linting and Formatting

This project uses ESLint for code linting and Prettier for code formatting. Before submitting a pull request, please ensure your code follows these standards by running:
```ssh
npm run lint
```
