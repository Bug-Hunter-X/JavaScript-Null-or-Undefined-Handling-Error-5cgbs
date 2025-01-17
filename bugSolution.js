function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    return null; // Handle null or undefined values
  }
  // Perform operations safely
  return a + b; 
}