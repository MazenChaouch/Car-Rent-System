# **Car Rental Reservation Form**

## **Problem Description**

You need to create a **Car Rental Reservation Form** that allows users to enter their details and calculate the total cost of their reservation. The form must validate user input and display **inline error messages** for incorrect fields. This exercise will help you practice **JavaScript form validation, DOM manipulation, and ES6 concepts**.

---

## **Scenario (Real-Life Example)**

You work for a car rental company. Your task is to build a form where users can:

1. Enter their personal information (name, email, phone number).
2. Select a car type (Economy, Standard, Luxury).
3. Choose a start and end date for the rental period.
4. Calculate and display the total cost based on the selected car type and the number of rental days.
5. Store each successful submission in a table below the form.

---

## **Tasks**

| Task                                      | Description                                                                                                                                                                                   |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. HTML Structure (with Tailwind CSS)** | Create the form with fields: Full Name, Email, Phone Number, Car Type, Start Date, End Date, Total Cost, Submit Button. Below the form, create a table to display submitted reservations.     |
| **2. Form Validation**                    | Validate: Full Name (min. 3 characters must be 2 words), Email (must contain '@' and '.'), Phone Number (8 digits, numbers only), Car Type (must be selected), Dates (End Date > Start Date). |
| **3. Error Messages**                     | Show inline error messages if validation fails, hide them once corrected.                                                                                                                     |
| **4. Cost Calculation**                   | Calculate total cost using the formula: `Total Cost = (End Date - Start Date) * Price per Day`. Update dynamically when form is valid.                                                        |
| **5. Store Submissions**                  | Save each successful submission and display it in a table below the form.                                                                                                                     |

---

### 1. **HTML Structure (with Tailwind CSS)**

Create the form with the following fields:

- **Full Name** (text input)
- **Email** (email input)
- **Phone Number** (tel input)
- **Car Type** (dropdown with prices: Economy $50/day, Standard $70/day, Luxury $100/day)
- **Start Date** (date input)
- **End Date** (date input)
- **Total Cost** (display the calculated cost)
- **Submit Button**
- **Reservation Table**: A table below the form to store and display submitted reservations. Each row must include the reservation details along with **Update** and **Delete** buttons.

### 2. **Form Validation**

Write JavaScript to validate the following:

- **Full Name**: At least 3 characters long.
- **Email**: Must contain "@" and "." in the correct order.
- **Phone Number**: Must contain only numbers and be 10 to 15 digits long.
- **Car Type**: Must be selected.
- **Dates**: End date must be after the start date.

### 3. **Error Messages**

- Display **inline error messages** below each field if validation fails.
- Hide the error messages once the user corrects the input.

### 4. **Cost Calculation**

- Calculate the total cost by multiplying the number of rental days by the price per day of the selected car type.
- **Formula:** `Total Cost = (End Date - Start Date) * Price per Day`
- Update the **Total Cost** dynamically when the form is valid.

### 5. **Store Submissions**

- When the user submits a valid form, save the information.
- Add a new row to the reservation table displaying the details.
- Each row in the table must have an **Update** button that allows users to modify their reservation.
- Each row must also have a **Delete** button to remove the reservation.

---

## **Bonus (Optional)**

1. Add **real-time validation** (validate fields as the user types).
2. Use **local storage** to save and restore the user’s information if they refresh the page.
3. Implement an **edit mode** when clicking the Update button, allowing users to modify their reservation directly in the form fields and re-save the changes.
4. Improve the UI by making the table interactive (e.g., highlight rows on hover, animate row removal when deleting).
