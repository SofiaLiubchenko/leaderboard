import { Color } from "@shared/enums";

import type { User } from "./User";

const names = [
  "Катерина Петренко",
  "Олексій Іванов",
  "Марія Коваль",
  "Володимир Сидоренко",
  "Олена Шевченко",
  "Дмитро ДуууууууужеДовгеПрізвищеЮзера",
  "Світлана Лі",
  "Ігор Мельник",
  "Наталія Гнатюк",
  "Андрій Савченко",
];

// function generates the array of random users
export function generateUsers(count: number): User[] {
  const colors = [Color.RED, Color.GREEN, Color.BLUE];

  return Array.from({ length: count }, (_, i) => ({
    name: names[i % names.length],
    color: colors[i % colors.length],
    speed: 70 + Math.floor(Math.random() * 30),
    time: 70000 + Math.floor(Math.random() * 40000),
  }));
}
