export class PostColors {
  private static yellow = '#FFFCCF';
  private static green = '#C5FAD7';
  private static red = '#FECDCF';
  private static pink = '#FFE0F8';
  private static blue = '#C2F8FB';

  static getColors(): string[] {
    return [this.blue, this.green, this.red, this.pink, this.yellow]
  }
}
