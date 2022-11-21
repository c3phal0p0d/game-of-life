class Cell
{
    static size = 5;
    static aliveColor = "#ffffff";
    static deadColor = "#000000";

    constructor(grid, x, y){
        this.grid = grid;
        this.x = x;
        this.y = y;

        this.alive = Math.random() > 0.5;
        this.aliveInNextGen = true;
    }

    draw(){
        let color = this.alive ? Cell.aliveColor : Cell.deadColor;
        this.grid.fillStyle = color;
        this.grid.fillRect(this.x * Cell.size, this.y * Cell.size, Cell.size, Cell.size);
    }
}