window.onload = () => {
    document.getElementById('start').addEventListener('click', () => {
        const canvas = document.getElementById('canvas');
        const game = new Life(canvas);
        game.start();
    });
}