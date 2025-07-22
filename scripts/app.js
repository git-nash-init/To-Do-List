import { calculateNextDate } from './recurrence.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('task-form');
  const recurrenceSelect = document.getElementById('recurrence');
  const customIntervalInput = document.getElementById('custom-interval');

  recurrenceSelect.addEventListener('change', () => {
    customIntervalInput.style.display =
      recurrenceSelect.value === 'custom' ? 'block' : 'none';
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = {
      title: document.getElementById('title').value.trim(),
      description: document.getElementById('description').value.trim(),
      dueDate: document.getElementById('due-date').value,
      tags: document.getElementById('tags').value.split(',').map(t => t.trim()),
      recurrence: {
        type: document.getElementById('recurrence').value,
        interval: document.getElementById('custom-interval').value || null,
      },
    };

    if (task.recurrence.type !== 'none' && task.dueDate) {
      const nextDate = calculateNextDate(task.dueDate, task.recurrence.type, task.recurrence.interval);
      console.log('Next Recurring Date:', nextDate);
    }

    console.log('Task Saved:', task);
    // Save to localStorage or backend later
    form.reset();
    customIntervalInput.style.display = 'none';
  });
});
