When using `datetime-local` input type, here is how we can pass the data to the backend and properly parse it:

Frontend:

```
// This converts the string to a Date object
<input
  type="datetime-local"
  {...register('eventDate', {
    valueAsDate: true // ← This is key!
  })}
/>

// Now this works:
const onSubmit = (data) => {
  console.log(data.eventDate); // Date object
  mutation.mutate({
    eventDate: data.eventDate.toISOString() // ✅ Works!
  });
};
```

Backend:

Just use `z.string().datetime()` to parse it.
