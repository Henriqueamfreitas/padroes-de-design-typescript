// Abstract product 
abstract class Furniture {
    public abstract assemble(): void;
}

// concrete product 1
class Chair extends Furniture {
    public assemble(): void {
        console.log('Assembling a chair.');
    }
}

// concrete product 2
class Table extends Furniture {
    public assemble(): void {
        console.log('Assembling a table.');
    }
}

// Factory w/ factory method 
abstract class FurnitureFactory {
    public abstract createFurniture(type: string): Furniture;
}

class ConcreteFurnitureFactory extends FurnitureFactory {
    public createFurniture(type: string): Furniture {
        if (type === 'chair') {
            const chair = new Chair()
            return chair
        }
        if (type === 'table') {
            const table = new Table()
            return table
        }
        throw new Error('Invalid furniture type');
    }
}

function factoryClient() {
    const factory = new ConcreteFurnitureFactory()
    const chair = factory.createFurniture('chair')
    chair.assemble()
    const table = factory.createFurniture('table')
    table.assemble()
}
factoryClient()