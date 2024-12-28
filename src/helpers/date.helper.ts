export class DateHelper {
  static formatDate(date: Date, format: string): string {
    const map: { [key: string]: string } = {
      MM: ("0" + (date.getMonth() + 1)).slice(-2),
      DD: ("0" + date.getDate()).slice(-2),
      YYYY: date.getFullYear().toString(),
      HH: ("0" + date.getHours()).slice(-2),
      mm: ("0" + date.getMinutes()).slice(-2),
      ss: ("0" + date.getSeconds()).slice(-2),
    };

    return format.replace(/MM|DD|YYYY|HH|mm|ss/gi, (matched) => map[matched]);
  }

  static addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  static subtractDays(date: Date, days: number): Date {
    return this.addDays(date, -days);
  }

  static differenceInDays(date1: Date, date2: Date): number {
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  static isSameDay(date1: Date, date2: Date): boolean {
    return date1.toDateString() === date2.toDateString();
  }

  static isToday(date: Date): boolean {
    return this.isSameDay(date, new Date());
  }

  static isBefore(date1: Date, date2: Date): boolean {
    return date1 < date2;
  }

  static isAfter(date1: Date, date2: Date): boolean {
    return date1 > date2;
  }

  static isBetween(date: Date, startDate: Date, endDate: Date): boolean {
    return date >= startDate && date <= endDate;
  }

  static isWeekend(date: Date): boolean {
    return date.getDay() === 0 || date.getDay() === 6;
  }

  static isLeapYear(year: number): boolean {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }

  static getDaysInMonth(year: number, month: number): number {
    return new Date(year, month, 0).getDate();
  }

  static getFirstDayOfMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  static getLastDayOfMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  }

  static getFirstDayOfWeek(date: Date, firstDayOfWeek: number = 0): Date {
    const day = date.getDay();
    const diff = (day - firstDayOfWeek + 7) % 7;
    return this.subtractDays(date, diff);
  }

  static getLastDayOfWeek(date: Date, firstDayOfWeek: number = 0): Date {
    const day = date.getDay();
    const diff = (day - firstDayOfWeek + 7) % 7;
    return this.addDays(date, 6 - diff);
  }

  static getWeekNumber(date: Date): number {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    const firstDay = firstDayOfYear.getDay();
    const daysInFirstWeek = 7 - firstDay;
    const weekNumber = Math.ceil((pastDaysOfYear - daysInFirstWeek) / 7) + 1;
    return weekNumber;
  }

  static generateRandomDate() {
    const start = new Date(2000, 0, 1).getTime();
    const end = new Date().getTime();
    return new Date(start + Math.random() * (end - start));
  }

  static generateRandomDateInRange(startDate: Date, endDate: Date) {
    return new Date(
      startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()),
    );
  }

  static generateRandomDateArray(length = 10) {
    return Array.from({ length }, () => this.generateRandomDate());
  }

  static generateRandomDateArrayInRange(startDate: Date, endDate: Date, length = 10) {
    return Array.from({ length }, () => this.generateRandomDateInRange(startDate, endDate));
  }
}
