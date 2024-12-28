import dayjs, { Dayjs } from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isBetween from "dayjs/plugin/isBetween";
import isLeapYear from "dayjs/plugin/isLeapYear";
import weekOfYear from "dayjs/plugin/weekOfYear";

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(isBetween);
dayjs.extend(isLeapYear);
dayjs.extend(weekOfYear);

export class DateHelper {
  static formatDate(date: Dayjs, format: string): string {
    return date.format(format);
  }

  static addDays(date: Dayjs, days: number): Dayjs {
    return date.add(days, "day");
  }

  static subtractDays(date: Dayjs, days: number): Dayjs {
    return date.subtract(days, "day");
  }

  static differenceInDays(date1: Dayjs, date2: Dayjs): number {
    return date2.diff(date1, "day");
  }

  static isSameDay(date1: Dayjs, date2: Dayjs): boolean {
    return date1.isSame(date2, "day");
  }

  static isToday(date: Dayjs): boolean {
    return date.isSame(dayjs(), "day");
  }

  static isBefore(date1: Dayjs, date2: Dayjs): boolean {
    return date1.isBefore(date2);
  }

  static isAfter(date1: Dayjs, date2: Dayjs): boolean {
    return date1.isAfter(date2);
  }

  static isBetween(date: Dayjs, startDate: Dayjs, endDate: Dayjs): boolean {
    return date.isBetween(startDate, endDate, null, "[]");
  }

  static isWeekend(date: Dayjs): boolean {
    const day = date.day();
    return day === 0 || day === 6;
  }

  static isLeapYear(year: number): boolean {
    return dayjs(`${year}-01-01`).isLeapYear();
  }

  static getDaysInMonth(year: number, month: number): number {
    return dayjs(`${year}-${month}-01`).daysInMonth();
  }

  static getFirstDayOfMonth(date: Dayjs): Dayjs {
    return date.startOf("month");
  }

  static getLastDayOfMonth(date: Dayjs): Dayjs {
    return date.endOf("month");
  }

  static getFirstDayOfWeek(date: Dayjs, firstDayOfWeek: number = 0): Dayjs {
    return date.startOf("week").add(firstDayOfWeek, "day");
  }

  static getLastDayOfWeek(date: Dayjs, firstDayOfWeek: number = 0): Dayjs {
    return date.endOf("week").add(firstDayOfWeek, "day");
  }

  static getWeekNumber(date: Dayjs): number {
    return date.week();
  }

  static generateRandomDate(): Dayjs {
    const start = dayjs("2000-01-01");
    const end = dayjs();
    return dayjs(start.valueOf() + Math.random() * (end.valueOf() - start.valueOf()));
  }

  static generateRandomDateInRange(startDate: Dayjs, endDate: Dayjs): Dayjs {
    return dayjs(startDate.valueOf() + Math.random() * (endDate.valueOf() - startDate.valueOf()));
  }

  static generateRandomDateArray(length = 10): Dayjs[] {
    return Array.from({ length }, () => this.generateRandomDate());
  }

  static generateRandomDateArrayInRange(startDate: Dayjs, endDate: Dayjs, length = 10): Dayjs[] {
    return Array.from({ length }, () => this.generateRandomDateInRange(startDate, endDate));
  }
}
