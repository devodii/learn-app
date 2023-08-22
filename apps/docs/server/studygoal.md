# Study Goal Entity

The Study Goal entity represents the study goals set by users in the application. Each study goal belongs to a specific category and has details such as title, description, target date, and category association.

## Table of Contents

- [Study Goal Entity](#study-goal-entity)
  - [Overview](#overview)
  - [Endpoints](#endpoints)
    - [Create Study Goal](#create-study-goal)
    - [Get All Study Goals](#get-all-study-goals)
    - [Get Study Goal by ID](#get-study-goal-by-id)
  - [Entities](#entities)
    - [Study Goal](#study-goal)
    - [Study Goal Category](#study-goal-category)
  - [Usage](#usage)

## Overview

The Study Goal entity allows users to define specific goals they intend to achieve within a set timeframe. Each goal is associated with a study goal category, making it easier to organize and manage goals based on their type.

## Endpoints

### Create Study Goal

Create a new study goal.

- **URL:** `/api/goals`
- **Method:** POST
- **Request Body:**
  ```json
  {
    "title": "Complete Math Assignment",
    "description": "Finish the calculus homework.",
    "targetDate": "2023-09-15",
    "categoryId": 1
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "title": "Complete Math Assignment",
    "description": "Finish the calculus homework.",
    "targetDate": "2023-09-15",
    "categoryId": 1
  }
  ```

### Get All Study Goals

Get a list of all study goals.

- **URL:** `/api/goals`
- **Method:** GET
- **Response:**
  ```json
  [
    {
      "id": 1,
      "title": "Complete Math Assignment",
      "description": "Finish the calculus homework.",
      "targetDate": "2023-09-15",
      "categoryId": 1
    },
    {
      "id": 2,
      "title": "Read Self-Improvement Book",
      "description": "Read a book on personal development.",
      "targetDate": "2023-09-30",
      "categoryId": 2
    }
  ]
  ```

### Get Study Goal by ID

Get details of a specific study goal by ID.

- **URL:** `/api/goals/:id`
- **Method:** GET
- **Response:**
  ```json
  {
    "id": 1,
    "title": "Complete Math Assignment",
    "description": "Finish the calculus homework.",
    "targetDate": "2023-09-15",
    "categoryId": 1
  }
  ```

## Entities

### Study Goal

Represents a study goal set by a user.

- `id`: The unique identifier of the study goal.
- `title`: The title or name of the study goal.
- `description`: A detailed description of the study goal.
- `targetDate`: The target date for achieving the study goal.
- `categoryId`: The ID of the study goal category to which the goal belongs.

### Study Goal Category

Represents a category to which study goals can be assigned.

- `id`: The unique identifier of the category.
- `name`: The name of the category.

## Usage

To use the Study Goal entity, make requests to the provided API endpoints using the appropriate HTTP methods and request bodies as described above.


