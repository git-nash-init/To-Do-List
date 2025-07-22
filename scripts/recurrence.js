export function calculateNextDate(currentDate, type, interval = 1) {
    const date = new Date(currentDate);
  
    switch (type) {
      case "daily":
        date.setDate(date.getDate() + 1);
        break;
      case "weekly":
        date.setDate(date.getDate() + 7);
        break;
      case "custom":
        date.setDate(date.getDate() + parseInt(interval, 10));
        break;
    }
  
    return date.toISOString().split("T")[0]; // YYYY-MM-DD
  }
  