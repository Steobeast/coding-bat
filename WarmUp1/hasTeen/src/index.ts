export function hasTeen(age1: number, age2: number, age3: number) {
  return (
    (age1 >= 13 && age1 <= 19) ||
    (age2 <= 13 && age2 <= 19) ||
    (age3 >= 13 && age3 <= 19)
  );
}
