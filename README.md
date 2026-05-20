# Orders Management Dashboard

A responsive and interactive orders management dashboard built with **React, TypeScript, Vite, and Tailwind CSS**.  

---

## Features

### Order Management
- Displays a list of orders in a responsive table
- works with mock data (no backend was implmented)

### Search
- Search orders by:
  - Customer name
  - Order ID
- Handles partial matching and normalization
- Handles both Farsi and English numbers

### Filtering
- Filter orders by status:
  - Pending
  - Processing
  - Completed
  - Cancelled

### Sorting
- Sort orders by creation date, ascending or descending

### Pagination
- Page-based navigation
- Dynamic page size control
- Total item count display

### URL Sync
- Filters, pagination, and page size are synced with URL query params
- State is updated on page load

### Order Update Modal
- Change order status via modal dialog (mock data stored as state since backend is not connected)

### UI States
- Loading state (skeleton table, matches number of data per page when loading)
- Empty state (no results)
- Error state handling

---

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router

---

## Architecture Overview

### Folder Structure
- `components/` Reusable UI components
- `hooks/` logic and state management
- `utils/` Pure helper functions (filtering, pagination, text sanitizing etc.)
- `data/` → Mock data source
- `types/` → TypeScript type definitions
- `pages/` → Page-level components

---

### State Management Strategy
- Centralized filter state in `useOrders` hook
- Derived data (filtered + paginated orders)
- URL query parameters used as a source of truth for filters
- Mock data stored in state to manage updating the data localy

---

### URL State Sync
The following states are persisted in URL:
- page number
- page size
- filters (status, search, sort)

This allows:
- shareable URLs
- persistence after refresh
- better UX consistency

---

##  Trade-offs

- No backend integration (uses mock data)
- No infinite scroll (pagination used instead)
- Simplified validation for input fields

These decisions were made to focus on **frontend logic, state management, and UI architecture**.

---

## Edge Cases Handled

- Empty search results
- Invalid page numbers from URL
- Page size limits (min 1/max 20)
- Combined filter interactions
- Pagination reset to page 1 on filter change
- Skeleton loading consistency with page size
- Farsi numbers masked to English letters
- Debounced search input to prevent multiple queries
- Prevented layout shift when loading data after skeleton
- Drag component for table in smaller screen size

---

## Possible Improvements

If extended further, the project could include:

- Backend API integration
- React Query for caching
- Virtualized table for large datasets
- Unit + integration tests for hooks and utils
- Keyboard navigation for table and modal
- Accessibility improvements


---

## How to Run

```bash
npm install
npm run dev