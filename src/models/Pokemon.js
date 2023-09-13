export class Pokemon {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.imgUrl = data.sprites.other.dream_world.front_default
    }
}