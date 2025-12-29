# Software Requirements Specification (SRS)
## for Our Hope: Blood Donation and Request Platform

**Version:** 1.0
**Date:** 2025-12-29
**Prepared for:** University Project Submission

---

## 1. Introduction

### 1.1 Purpose
The purpose of this document is to present a detailed description of the open-source software "Our Hope," a web-based blood donation assistance platform. It will explain the purpose and features of the system, the interfaces of the system, what the system will do, the constraints under which it must operate, and how the system will react to external stimuli. This document is intended for the stakeholders, developers, and the project evaluation committee.

### 1.2 Scope
"Our Hope" is a platform designed to bridge the gap between blood donors and those in urgent need of blood. The system facilitates:
- Registration and profile management for Blood Donors and Blood Requesters.
- Searching for donors based on blood group and location.
- Posting and managing blood requests.
- **Blood Exchange:** connecting users who can exchange compatible blood types.
- **Real-time Information:** View blood banks on a map and relevant health news.

The software will be a web application accessible via standard web browsers. It will strictly handle information connection and will not facilitate medical procedures or logistics of blood transport.

### 1.3 Definitions, Acronyms, and Abbreviations
- **SRS:** Software Requirements Specification
- **Donor:** A registered user willing to donate blood.
- **Requester:** A registered user seeking blood for themselves or a patient.
- **UI:** User Interface.
- **IEEE:** Institute of Electrical and Electronics Engineers.

### 1.4 References
- IEEE Std 830-1998: IEEE Recommended Practice for Software Requirements Specifications.
- IEEE 29148-2018: ISO/IEC/IEEE International Standard - Systems and software engineering -- Life cycle processes -- Requirements engineering.

## 2. Overall Description

### 2.1 Product Perspective
"Our Hope" is a standalone web-based system. It does not currently interface with existing hospital management systems but is designed with a modular architecture to allow for future API integrations. The system operates on a client-server architecture.

### 2.2 Product Functions Overview
- **User Registration:** Simple and secure user registration.
- **Profile Management:** Update personal details, contact info, and blood group.
- **Donor Search:** Filter donors by blood type and availability.
- **Blood Requests & Exchange:** Post requests or offer exchanges (Needs vs Provides).
- **Blood Banks Map:** interactive map showing nearby blood banks.
- **News Feed:** Real-time updates on health warnings and severe weather.

### 2.3 User Classes and Characteristics
- **Donor:**
  - Characteristics: Individuals aged 18-65, meeting health criteria for donation.
  - Goals: Register availability, view requests, and contact requesters to help.
- **Requester:**
  - Characteristics: Patients, hospitals, or guardians of patients needing blood.
  - Goals: Search for matching donors, post requests, and receive contact details quickly.

### 2.4 Operating Environment
- **Client Side:** Modern web browsers (Chrome, Firefox, Safari, Edge) on Desktop and Mobile devices.
- **Server Side:** Node.js environment (Next.js framework).
- **Server Side:** Node.js environment (Next.js framework) with MongoDB.
- **External APIs:** Google Maps API, IPInfo, PredictHQ (for News).

### 2.5 Design and Implementation Constraints
- **Regulatory Compliance:** Must adhere to basic data privacy laws (e.g., GDPR principles for user data).
- **Technology Stack:** Must use the pre-defined Next.js ecosystem.
- **Language:** The interface shall be in English.

### 2.6 Assumptions and Dependencies
- Users have access to a reliable internet connection.
- Users provide accurate medical information (e.g., Blood Group).
- The platform relies on user honesty as there is no direct integration with medical labs for verification in Phase 1.

## 3. Functional Requirements

### 3.1 Donor & Recipient Listing
- **FR-01:** The system shall allow users to submit a Donor Listing (Profile Creation).
- **FR-02:** The system shall allow users to submit a Recipient Request or Blood Exchange Proposal.
- **FR-03:** The system shall require valid contact and location details during submission.

### 3.2 Blood Exchange Management
- **FR-04:** The system shall allow Requesters to specify blood types they **NEED** and blood types they can **PROVIDE** (Exchange Mode).
- **FR-05:** The system shall allow users to upload necessary medical documents during request submission.



### 3.3 Search and Matching
- **FR-06:** The system shall allow users to search for Donors/Recipients by City and Blood Group.
- **FR-07:** The system shall filter results based on "Needs" and "Provides" compatibility in Exchange mode.

### 3.4 Information Services
- **FR-08:** The system shall display an interactive map of Blood Banks using Geolocation.
- **FR-09:** The system shall display relevant news (Health, Weather) based on user location.

### 3.5 Contact and Privacy
- **FR-10:** The system shall display Donor contact details publicly to facilitate immediate connection.
- **FR-11:** The system shall require users to acknowledge that their submitted data will be public.


### 3.6 Notifications
- **FR-12:** The system shall display on-screen notifications for successful actions (e.g., "Request Posted Successfully" or "Profile Updated").

## 4. Non-Functional Requirements

### 4.1 Performance
- **NFR-01:** The system shall load the landing page within 2 seconds on a standard 4G network.
- **NFR-02:** The system shall support at least 100 concurrent users without performance degradation.

### 4.2 Security
- **NFR-03:** All data transmission shall occur over HTTPS.
- **NFR-04:** The system shall prevent SQL Injection/NoSQL Injection and XSS attacks through input validation.

### 4.3 Privacy
- **NFR-05:** Donor contact details are **visible to the public** by default to ensure rapid response.
- **NFR-06:** Users must be explicitly informed during registration that their data will be public.

### 4.4 Usability
- **NFR-08:** The UI shall be responsive and adapt to mobile and desktop screens.
- **NFR-09:** Critical actions (like deleting a request) shall require a confirmation dialog.
- **NFR-10:** The interface should be intuitive with a maximum of 3 clicks to reach major functions from the dashboard.

### 4.5 Reliability and Availability
- **NFR-11:** The system shall strive for 99.9% uptime during business hours.
- **NFR-12:** Database backups shall be performed daily.

## 5. External Interface Requirements

### 5.1 User Interface Requirements
- A clean, minimalist aesthetic using a defined color palette (Red, White, Dark Grey) to evoke a medical/health feel.
- Accessible navigation bar with links to Home, Donate, Request, and Profile.
- Forms shall have clear labels, placeholders, and real-time validation error messages.

### 5.2 Software Interfaces
- **Database Interface:** The application shall communicate with the database via an ORM (e.g., Prisma).
- **API Interface:** The frontend shall communicate with the backend via RESTful API endpoints using JSON format.

### 5.3 Hardware Interfaces
- No specific hardware interfaces are required beyond standard server and client devices (Smartphone, PC, Tablet).

## 6. Data Requirements

### 6.1 Data Storage
The system shall store the following entities:
- **Donor:** Name, Email, BloodGroup, Province, District, City, PhoneNumber, Message.
- **Recipient/Exchange:** Name, Email, City, PhoneNumber, Message, ExchangeToggle (Boolean), NeedBloodGroup (Enum), ProvideBloodGroups (Array), Documents (File).

### 6.2 Format and Privacy Considerations
- Dates shall be stored in UTC ISO 8601 format.
- Personally Identifiable Information (PII) like phone numbers are considered public for the purpose of this platform.

## 7. System Models

### 7.1 Use Case Descriptions

**Use Case 1: Search for Donor**
- **Actor:** Requester
- **Precondition:** User is registered.
- **Flow:**
  1. User navigates to search page.
  2. User selects Blood Group (e.g., "O+") and Location.
  3. User clicks "Search".
  4. System queries database for "O+" Donors in that location who are "Available".
  5. System displays results list.
  6. User views profile of a donor.

**Use Case 2: Post Blood Request**
- **Actor:** Requester
- **Flow:**
  1. User clicks "Request Blood".
  2. Fills form with details (Hospital, Urgency, Units).
  3. Submits form.
  4. System validates inputs.
**Use Case 2: Submit Blood Exchange**
- **Actor:** Requester
- **Flow:**
  1. User navigates to "Add Recipient".
  2. Fills Name, Contact, and Location.
  3. Toggles "Exchange Blood".
  4. Selects Blood Type "Needed" (e.g., A+).
  5. Selects Blood Types "Provided" (e.g., O-, B+).
  6. Submits form.
  7. System saves listing to database.

## 8. Limitations and Ethical Considerations

### 8.1 Limitations
- The system does not verify the medical eligibility of donors physically; it relies on self-report.
- Location matching for donors is based on self-reported city/district selection, while the Map feature uses approximate IP-based or GPS geolocation.

### 8.2 Ethical Considerations
- **Altruism:** The platform is purely for voluntary donation; buying/selling blood is strictly prohibited.
- **Data Usage:** User data is strictly for the purpose of blood donation matching and will not be sold to third parties.
- **Safety:** The platform serves as an information conduit and does not guarantee the safety of the blood; actual transfusions are the responsibility of medical professionals.

## 9. Future Enhancements
- **Push Notifications:** SMS/Email notifications for new requests matching a Donor's blood group.
- **Hospital Verification:** Integration with Hospital Information Systems (HIS) for verified requests.
- **Mobile Application:** Native apps for iOS and Android using React Native.
- **Appointment Booking:** System to book slots at blood banks.
