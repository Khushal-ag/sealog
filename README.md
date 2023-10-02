<div align="center">
  
![][views] ![][stars] ![][forks] ![][issues] ![][license] ![][repo-size]

<!-- logo/title -->

<br>
<picture>
  <source media="(prefers-color-scheme: dark,(width='300px'))" srcset="./public/sealog-logo-light.png">
  <source media="(prefers-color-scheme: light,(width='300px'))" srcset="./public/sealog-logo-light.png">
  <img src="./public/sealog-logo-light.png" alt="sealog" width='300px'>
</picture>
<br>

### 🏨 Sealog is an internal hotel management website built with React18, Supabase, JavaScript, Styled-components and many other technologies. It allows employees to manage everything about hotel bookings, cabins, and guests

## ⚙️Dependencies Used

---

**[<kbd> <br> **@supabase/supabase-js** ^2.32.0 <br> </kbd>][supabase]**&nbsp;&nbsp;
**[<kbd> <br> **@tanstack/react-query** ^4.33.0 <br> </kbd>][query]**&nbsp;&nbsp;
**[<kbd> <br> **react-hook-form:** ^7.45.4 <br> </kbd>][form]**&nbsp;&nbsp;
**[<kbd> <br> **styled-components** ^6.0.7 <br> </kbd>][styled]**&nbsp;&nbsp;
**[<kbd> <br> **recharts** ^2.8.0 <br> </kbd>][recharts]**&nbsp;&nbsp;
**[<kbd> <br> **react-router-dom:** ^6.15.0 <br> </kbd>][router]**&nbsp;&nbsp;
**[<kbd> <br> **vitejs:** ^4.4.5 <br> </kbd>][vite]**&nbsp;&nbsp;
**[<kbd> <br> **eslint:** ^8.45.0 <br> </kbd>][eslint]**&nbsp;&nbsp;
**[<kbd> <br> **prettier:** ^3.0.1<br> </kbd>][prettier]**&nbsp;

## 📸 Screen Shots

<br>

| **Dashboard(Dark)**                                                 | **Dashboard(Light)**                                                 |
| ------------------------------------------------------------------- | -------------------------------------------------------------------- |
| ![Dark Dashboard](https://graph.org/file/f0fb9bda3028e123d7c2d.png) | ![Light Dashboard](https://graph.org/file/e5694c0ea9e32a24b3e4f.png) |

| **Booking List**                                                  | **Cabin List**                                                  |
| ----------------------------------------------------------------- | --------------------------------------------------------------- |
| ![Booking List](https://graph.org/file/ffc49b74b5e4aef2c4871.png) | ![Cabin List](https://graph.org/file/6ae0e599fcaed0ea35de5.png) |

| **New User**                                                  | **Edit Settings**                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------------ |
| ![New User](https://graph.org/file/4d733a4d98872bb046eff.png) | ![Edit Settings](https://graph.org/file/6983cd53a08be4188c3fb.png) |

| **Booking Detail**                                                  | **Check-in**                                                  |
| ------------------------------------------------------------------- | ------------------------------------------------------------- |
| ![Booking Detail](https://graph.org/file/915a4e255d0e4b28cf13a.png) | ![Check-in](https://graph.org/file/3cd24ed73666bb05245a5.png) |

| **Edit Account**                                                  | **Log in**                                                  |
| ----------------------------------------------------------------- | ----------------------------------------------------------- |
| ![Edit Account](https://graph.org/file/0302343b2c23b254bb79b.png) | ![Log in](https://graph.org/file/408a358f5c5aeeba9f914.png) |

<br>
</div>

## 👀 Overview

This Hotel Management Application provides a comprehensive set of features for hotel employees to efficiently manage cabins, bookings, and guest information. It ensures secure user authentication and profile management while offering an intuitive user interface. The app also includes a dashboard with key insights and customizable application-wide settings, including support for dark mode.

## 🚀 Features

### 🔹 User Authentication and Signup

- Hotel employees can log in to the application to perform tasks.
- New users can only be signed up within the application to ensure that only actual hotel employees can create accounts.

### 🔹 User Profile Management

- Users can upload an avatar to personalize their profile.
- Users can change their name and password.

### 🔹 Cabin Management

- The app provides a table view with all cabins.
- Displays cabin information, including cabin photo, name, capacity, price, and current discount.
- Users can update or delete existing cabins.
- Users can create new cabins, including the ability to upload a photo.

### 🔹 Booking Management

- The app provides a table view with all bookings.
- Displays booking information, including arrival and departure dates, booking status, paid amount, cabin details, and guest data.
- Booking status can be "unconfirmed," "checked in," or "checked out."
- The table view is filterable by booking status.
- Additional booking data includes the number of guests, number of nights, guest observations, and whether breakfast was booked and its price.

### 🔹 Booking Operations

- Users can delete, check in, or check out a booking as the guest arrives.
- On check-in, users can accept payment outside the app and then confirm the payment within the app.
- Guests can add breakfast for the entire stay during check-in if they haven't already.

### 🔹 Guest Data Management

- Guest data contains full name, email, national ID, nationality, and a country flag for easy identification.

### 🔹 Dashboard

- The initial app screen serves as a dashboard displaying important information for the last 7, 30, or 90 days.
- Shows a list of guests checking in and out on the current day, and users can perform tasks related to these activities from the dashboard.
- Provides statistics on recent bookings, sales, check-ins, and occupancy rates.
- Includes a chart showing all daily hotel sales, distinguishing between "total" sales and "extras" sales (only breakfast at present).
- Displays statistics on stay durations, an important metric for the hotel.

### 🔹 Application-wide Settings

- Users can define application-wide settings such as breakfast price, minimum and maximum nights per booking, and maximum guests per booking.

### 🌚 Dark Mode

- The app includes a dark mode option for a different visual appearance and enhanced user experience in low-light conditions.

## 📝 Usage

To use this application, follow the installation instructions in the provided documentation. Make sure to set up user accounts and configure application-wide settings as needed.

## 🛠️ Getting Started

⬇️ **Fetch latest source code from master branch.**

```bash
git clone https://github.com/Khushal-ag/sealog.git

cd sealog
```

🚧 **Create `.env.local` file & add your own `SUPABASE_CONFIGS` as mentioned in `.env.example` file.**

```bash
VITE_SUPABASE_KEY = <Your Supabase Key>

VITE_SUPABASE_URL = <Your Supabase URL>
```

💻 **Run the Website with 🆚Code `or` Command Line: ( _pnpm_ must be installed )**

```bash
pnpm i

pnpm dev
```

🧪 **Testing Credentials**

```bash
Email: test@test.com
Password: testtest
```

<div align="center">

## 📂 Directory Structure

</div>

```bash
.
├── .env.example
├── .eslintrc.js
├── .gitignore
├── .prettierrc.cjs
├── index.html
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── package.json
├── pnpm-lock.yaml
├── prettier.config.cjs
├── public
│   ├── default-user.jpg
│   ├── sealog-favicon.png
│   ├── sealog-logo-dark.png
│   └── sealog-logo-light.png
├── README.md
├── src
│   ├── App.jsx
│   ├── context
│   │   ├── DarkModeContext.jsx
│   │   └── useDarkMode.js
│   ├── features
│   │   ├── authentication
│   │   │   ├── LoginForm.jsx
│   │   │   ├── Logout.jsx
│   │   │   ├── SignupForm.jsx
│   │   │   ├── UpdatePasswordForm.jsx
│   │   │   ├── UpdateUserDataForm.jsx
│   │   │   ├── useLogin.js
│   │   │   ├── useLogout.js
│   │   │   ├── UserAvatar.jsx
│   │   │   ├── useSignup.js
│   │   │   ├── useUpdateUser.js
│   │   │   └── useUser.js
│   │   ├── bookings
│   │   │   ├── BookingDataBox.jsx
│   │   │   ├── BookingDetail.jsx
│   │   │   ├── BookingRow.jsx
│   │   │   ├── BookingTable.jsx
│   │   │   ├── BookingTableOperations.jsx
│   │   │   ├── useBooking.js
│   │   │   ├── useBookings.js
│   │   │   └── useDeleteBooking.js
│   │   ├── cabins
│   │   │   ├── AddCabin.jsx
│   │   │   ├── CabinRow.jsx
│   │   │   ├── CabinTable.jsx
│   │   │   ├── CabinTableOperations.jsx
│   │   │   ├── CreateCabinForm.jsx
│   │   │   ├── useCabins.js
│   │   │   ├── useCreateCabin.js
│   │   │   ├── useDeleteCabin.js
│   │   │   └── useEditCabin.js
│   │   ├── check-in-out
│   │   │   ├── CheckinBooking.jsx
│   │   │   ├── CheckoutButton.jsx
│   │   │   ├── TodayActivity.jsx
│   │   │   ├── TodayItem.jsx
│   │   │   ├── useCheckin.js
│   │   │   ├── useCheckout.js
│   │   │   └── useTodayActivity.js
│   │   ├── dashboard
│   │   │   ├── DashboardBox.jsx
│   │   │   ├── DashboardFilter.jsx
│   │   │   ├── DashboardLayout.jsx
│   │   │   ├── DurationChart.jsx
│   │   │   ├── SalesChart.jsx
│   │   │   ├── Stat.jsx
│   │   │   ├── Stats.jsx
│   │   │   ├── useRecentBookings.js
│   │   │   └── useRecentStays.js
│   │   └── settings
│   │       ├── UpdateSettingsForm.jsx
│   │       ├── useSetting.js
│   │       └── useUpdateSetting.js
│   ├── hooks
│   │   ├── useLocalStorageState.js
│   │   ├── useMoveBack.js
│   │   └── useOutsideClick.js
│   ├── main.jsx
│   ├── pages
│   │   ├── Account.jsx
│   │   ├── Booking.jsx
│   │   ├── Bookings.jsx
│   │   ├── Cabins.jsx
│   │   ├── Checkin.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   ├── PageNotFound.jsx
│   │   ├── Settings.jsx
│   │   └── Users.jsx
│   ├── services
│   │   ├── apiAuth.js
│   │   ├── apiBookings.js
│   │   ├── apiCabins.js
│   │   ├── apiSettings.js
│   │   └── supabase.js
│   ├── styles
│   │   └── GlobalStyles.js
│   ├── ui
│   │   ├── AppLayout.jsx
│   │   ├── ButtonGroup.jsx
│   │   ├── ButtonIcon.jsx
│   │   ├── Button.jsx
│   │   ├── ButtonText.jsx
│   │   ├── Checkbox.jsx
│   │   ├── ConfirmDelete.jsx
│   │   ├── DarkModeToggle.jsx
│   │   ├── DataItem.jsx
│   │   ├── Empty.jsx
│   │   ├── ErrorFallback.jsx
│   │   ├── FileInput.jsx
│   │   ├── Filter.jsx
│   │   ├── Flag.jsx
│   │   ├── Form.jsx
│   │   ├── FormRow.jsx
│   │   ├── FormRowVertical.jsx
│   │   ├── Header.jsx
│   │   ├── HeaderMenu.jsx
│   │   ├── Heading.jsx
│   │   ├── Input.jsx
│   │   ├── Logo.jsx
│   │   ├── MainNav.jsx
│   │   ├── Menus.jsx
│   │   ├── Modal.jsx
│   │   ├── Pagination.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── Row.jsx
│   │   ├── Select.jsx
│   │   ├── Sidebar.jsx
│   │   ├── SortBy.jsx
│   │   ├── Spinner.jsx
│   │   ├── SpinnerMini.jsx
│   │   ├── Table.jsx
│   │   ├── TableOperations.jsx
│   │   ├── Tag.jsx
│   │   └── Textarea.jsx
│   └── utils
│       ├── constants.js
│       └── helpers.js
└── vite.config.js

```

## 🍃 Supabase Table Schemas

Here are the schemas for the tables used in sealog, as stored in Supabase:

### 📊 Cabins Table

The `cabins` table stores information about the cabins available in the hotel.

| Field Name   | Data Type               | Description               |
| ------------ | ----------------------- | ------------------------- |
| id           | Bigint (Generated)      | Unique identifier         |
| created_at   | Timestamp with Timezone | Timestamp of creation     |
| name         | Text (Nullable)         | Cabin name                |
| maxCapacity  | Smallint (Nullable)     | Maximum guest capacity    |
| regularPrice | Smallint (Nullable)     | Regular price per night   |
| discount     | Smallint (Nullable)     | Current discount (if any) |
| description  | Text (Nullable)         | Description of the cabin  |
| image        | Text (Nullable)         | URL of cabin photo        |

The `cabins` table is used to store information about the cabins available within the Sealog.

### 📊 Bookings Table

The `bookings` table records information about guest bookings.

| Field Name   | Data Type                  | Description                                                                |
| ------------ | -------------------------- | -------------------------------------------------------------------------- |
| id           | Bigint (Generated)         | Unique identifier                                                          |
| created_at   | Timestamp with Timezone    | Timestamp of creation                                                      |
| startDate    | Timestamp without Timezone | Start date of the booking                                                  |
| endDate      | Timestamp without Timezone | End date of the booking                                                    |
| numNights    | Smallint (Nullable)        | Number of nights for the booking                                           |
| numGuests    | Smallint (Nullable)        | Number of guests in the booking                                            |
| cabinPrice   | Real (Nullable)            | Price of the cabin                                                         |
| extrasPrice  | Real (Nullable)            | Price of additional extras (if any)                                        |
| totalPrice   | Real (Nullable)            | Total price of the booking                                                 |
| status       | Text (Nullable)            | Booking status (e.g., unconfirmed, checked in, checked out)                |
| hasBreakfast | Boolean (Nullable)         | Indicates if breakfast is included                                         |
| isPaid       | Boolean (Nullable)         | Indicates if the booking is paid                                           |
| observations | Text (Nullable)            | Additional observations or notes                                           |
| cabinId      | Bigint (Nullable)          | ID of the booked cabin (foreign key reference to cabins table)             |
| guestId      | Bigint (Nullable)          | ID of the guest making the booking (foreign key reference to guests table) |

The `bookings` table is used to manage guest bookings within the Sealog.

### 📊 Guests Table

The `guests` table stores information about hotel guests.

| Field Name  | Data Type               | Description              |
| ----------- | ----------------------- | ------------------------ |
| id          | Bigint (Generated)      | Unique identifier        |
| created_at  | Timestamp with Timezone | Timestamp of creation    |
| fullName    | Text (Nullable)         | Full name of the guest   |
| email       | Text (Nullable)         | Guest's email address    |
| nationalID  | Text (Nullable)         | National ID of the guest |
| nationality | Text (Nullable)         | Nationality of the guest |
| countryFlag | Text (Nullable)         | URL of the country flag  |

The `guests` table is used to store guest information within the Sealog.

### 📊 Settings Table

The `settings` table stores application-wide settings for the Sealog.

| Field Name         | Data Type               | Description                                  |
| ------------------ | ----------------------- | -------------------------------------------- |
| id                 | Bigint (Generated)      | Unique identifier                            |
| created_at         | Timestamp with Timezone | Timestamp of creation                        |
| minBookingLength   | Smallint (Nullable)     | Minimum length of a booking in nights        |
| maxBookingLength   | Smallint (Nullable)     | Maximum length of a booking in nights        |
| maxGuestPerBooking | Smallint (Nullable)     | Maximum number of guests allowed per booking |
| breakfastPrice     | Real (Nullable)         | Price of breakfast per guest (if applicable) |

The `settings` table is used to configure application-wide settings within the Sealog.

These tables are used to manage cabins, bookings, user accounts and hotel settings within the Sealog.

## 📜 License

This Hotel Management Application is available under the [GNU General Public License (GPL)](LICENSE).

## 👤 Author

This application was developed by [Khushal-ag](https://github.com/Khushal-ag).

## 📬 Feedback and Support

- For feedback or support, please contact [starkhush5@gmail.com](starkhush5@gmail.com).
- Remember to **⭐️ Star this project on GitHub** to show your support.

<div align='center'>

## ☢️ Contributors

[![][contributors]][contributors-graph]

_Note: It may take up to 24h for the [contrib.rocks][contrib-rocks] plugin to update because it's refreshed once a day._

</div>

<p align="center">
<img width="150%" src="https://camo.githubusercontent.com/6038c8f1fd8f60de75477470e5a87210e9256202e01dfba9986446304a0f0254/68747470733a2f2f63617073756c652d72656e6465722e76657263656c2e6170702f6170693f747970653d776176696e6726636f6c6f723d6772616469656e74266865696768743d36302673656374696f6e3d666f6f746572">
</p>

<!----------------------------------{ Labels }--------------------------------->

[views]: https://komarev.com/ghpvc/?username=sealog&label=view%20counter&color=red&style=flat
[repo-size]: https://img.shields.io/github/repo-size/Khushal-ag/sealog
[issues]: https://img.shields.io/github/issues-raw/Khushal-ag/sealog
[license]: https://img.shields.io/github/license/Khushal-ag/sealog
[forks]: https://img.shields.io/github/forks/Khushal-ag/sealog?style=flat
[stars]: https://img.shields.io/github/stars/Khushal-ag/sealog
[contributors]: https://contrib.rocks/image?repo=Khushal-ag/sealog&max=500
[contributors-graph]: https://github.com/Khushal-ag/sealog/graphs/contributors
[contrib-rocks]: https://contrib.rocks/preview?repo=Khushal-ag%2Fsealog

<!-----------------------------{ Dependencies Used }---------------------------->

[supabase]: https://supabase.com/docs
[query]: https://tanstack.com/query/latest/
[form]: https://react-hook-form.com/
[styled]: https://styled-components.com/
[recharts]: https://recharts.org/en-US/
[router]: https://reactrouter.com/en/main/start/overview
[eslint]: https://eslint.org/
[prettier]: https://prettier.io/
[vite]: https://vitejs.dev/

