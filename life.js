class Life {

    constructor(canvas){
        this.canvas = canvas;
        this.grid = canvas.getContext('2d');
        this.cells = [];
    }

    start(){
        this.numRows = Math.floor(this.canvas.width/Cell.size);
        this.numColumns = Math.floor(this.canvas.height/Cell.size);

        this.createGrid();
        window.requestAnimationFrame(() => this.update());
    }

    createGrid(){
        for (let x=0; x<this.numColumns; x++){
            this.cells[x] = [];
            for (let y=0; y<this.numRows; y++){
                this.cells[x][y] = new Cell(this.grid, x, y);
            }
        }
    }

    update(){
        this.checkNeighbours();
        this.grid.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let x=0; x<this.numColumns; x++){
            for (let y=0; y<this.numRows; y++){
                this.cells[x][y].draw();
            }
        }

        
        setTimeout(() => {
            window.requestAnimationFrame(() => this.update());
        }, 100);
        
    }
    
    checkNeighbours(){
        for (let x=0; x<this.numColumns; x++){
            for (let y=0; y<this.numRows; y++){
                let numNeighbours = this.isAlive(x-1, y-1) + this.isAlive(x-1, y) + this.isAlive(x-1, y+1) + this.isAlive(x, y-1) + this.isAlive(x, y) + this.isAlive(x, y+1) + this.isAlive(x+1, y-1) + this.isAlive(x+1, y) + this.isAlive(x+1, y+1);
                
                if (numNeighbours == 2){
                    this.cells[x][y].aliveInNextGen = this.cells[x][y].alive;
                } else if (numNeighbours == 3){
                    this.cells[x][y].aliveInNextGen = true;
                } else {
                    this.cells[x][y].aliveInNextGen = false;
                }
            }
        }

        for (let x=0; x<this.numColumns; x++){
            for (let y=0; y<this.numRows; y++){
                this.cells[x][y].alive = this.cells[x][y].aliveInNextGen;
            }
        }
    }

    isAlive(x, y){
        if (x<0 || x>=this.numColumns || y<0 || y>=this.numRows){
            return false;
        }

        return this.cells[x][y].alive?1:0

    }
}