/*
Import the external libraries:
- faker
*/
import faker from 'faker';

/*
Import the internal libraries:
- logger
- Museum
- Category
- ArtPiece
- User
*/
import { logger } from '../../../utilities';
import { Museum, Category, ArtPiece, User } from './schemas';

class Seeder {
    constructor() {
        this.musea = [];
        this.categories = [];
        this.artPieces = [];
        this.users = [];
    }

    museumCreate = async (title, description) => {
        const museumDetail = {
            title,
            description,
            categoryId: this.getRandomCategory(),
            artPieces: this.getRandomArtPieces(),
        };
        const museum = new Museum(museumDetail);

        try {
            const newmuseum = await museum.save();
            this.musea.push(newmuseum);

            logger.log({ level: 'info', message: `Museum created with id: ${newmuseum.id}!` });
        } catch (err) {
            logger.log({ level: 'info', message: `An error occurred when creating a museum: ${err}!` });
        }
    }

    categoryCreate = async (name, description) => {
        const categoryDetail = {
            name,
            description,
        };
        const category = new Category(categoryDetail);

        try {
            const newCategory = await category.save();

            this.categories.push(newCategory);

            logger.log({ level: 'info', message: `Category created with id: ${newCategory.id}!` });
        } catch (err) {
            logger.log({ level: 'info', message: `An error occurred when creating a category: ${err}!` });
        }
    }

    artPieceCreate = async (title, synopsis, image, author) => {
        const artPieceDetail = {
            title,
            synopsis,
            image,
            author,
            categoryId: this.getRandomCategory(),
        };
        const artPiece = new ArtPiece(artPieceDetail);

        try {
            const newArtPiece = await artPiece.save();
            this.artPieces.push(newArtPiece);

            logger.log({ level: 'info', message: `ArtPiece created with id: ${newArtPiece.id}!` });
        } catch (err) {
            logger.log({ level: 'info', message: `An error occurred when creating a artPiece: ${err}!` });
        }
    }

    userCreate = async (email, password) => {
        const userDetail = {
            email,
            localProvider: {
                password,
            },
        };
        const user = new User(userDetail);

        try {
            const newUser = await user.save();
            this.artPieces.push(newUser);

            logger.log({ level: 'info', message: `User created with id: ${newUser.id}!` });
        } catch (err) {
            logger.log({ level: 'info', message: `An error occurred when creating a user: ${err}!` });
        }
    }

    createMusea = async () => {
        await Promise.all([
            (async () => this.museumCreate(faker.lorem.sentence(), faker.lorem.paragraph()))(),
            (async () => this.museumCreate(faker.lorem.sentence(), faker.lorem.paragraph()))(),
            (async () => this.museumCreate(faker.lorem.sentence(), faker.lorem.paragraph()))(),
        ]);
    }

    createCategories = async () => {
        await Promise.all([
            (async () => this.categoryCreate(faker.lorem.word(), faker.lorem.sentence()))(),
            (async () => this.categoryCreate(faker.lorem.word(), faker.lorem.sentence()))(),
            (async () => this.categoryCreate(faker.lorem.word(), faker.lorem.sentence()))(),
            (async () => this.categoryCreate(faker.lorem.word(), faker.lorem.sentence()))(),
        ]);
    }

    createArtPieces = async () => {
        await Promise.all([
            (async () => this.artPieceCreate(faker.lorem.sentence(), faker.lorem.paragraph(), `https://picsum.photos/id/${faker.random.number(1000)}/200`, faker.name.lastName()))(),
            (async () => this.artPieceCreate(faker.lorem.sentence(), faker.lorem.paragraph(), `https://picsum.photos/id/${faker.random.number(1000)}/200`, faker.name.lastName()))(),
            (async () => this.artPieceCreate(faker.lorem.sentence(), faker.lorem.paragraph(), `https://picsum.photos/id/${faker.random.number(1000)}/200`, faker.name.lastName()))(),
            (async () => this.artPieceCreate(faker.lorem.sentence(), faker.lorem.paragraph(), `https://picsum.photos/id/${faker.random.number(1000)}/200`, faker.name.lastName()))(),
            (async () => this.artPieceCreate(faker.lorem.sentence(), faker.lorem.paragraph(), `https://picsum.photos/id/${faker.random.number(1000)}/200`, faker.name.lastName()))(),
            (async () => this.artPieceCreate(faker.lorem.sentence(), faker.lorem.paragraph(), `https://picsum.photos/id/${faker.random.number(1000)}/200`, faker.name.lastName()))(),
            (async () => this.artPieceCreate(faker.lorem.sentence(), faker.lorem.paragraph(), `https://picsum.photos/id/${faker.random.number(1000)}/200`, faker.name.lastName()))(),
        ]);
    }

    createUsers = async () => {
        await Promise.all([
            (async () => this.userCreate(faker.internet.email(), 'wicked4u'))(),
            (async () => this.userCreate(faker.internet.email(), 'wicked4u'))(),
            (async () => this.userCreate(faker.internet.email(), 'wicked4u'))(),
            (async () => this.userCreate(faker.internet.email(), 'wicked4u'))(),
            (async () => this.userCreate(faker.internet.email(), 'wicked4u'))(),
            (async () => this.userCreate(faker.internet.email(), 'wicked4u'))(),
            (async () => this.userCreate(faker.internet.email(), 'wicked4u'))(),
        ]);
    }

    getRandomCategory = () => {
        let category = null;
        if (this.categories && this.categories.length > 0) {
            category = this.categories[Math.round(Math.random() * (this.categories.length - 1))];
        }
        return category;
    }

    getRandomArtPieces = () => {
        let cArtPieces = null;
        if (this.artPieces && this.artPieces.length > 0) {
            const nArtPieces = Math.round(Math.random() * (this.artPieces.length - 1));
            cArtPieces = this.artPieces.slice(0, this.artPieces.length);
            while (cArtPieces.length > nArtPieces) {
                cArtPieces.splice(Math.round(Math.random() * (this.artPieces.length - 1)), 1);
            }
        }
        return cArtPieces;
    }

    seed = async () => {
        this.categories = await Category.estimatedDocumentCount().exec().then(async (count) => {
            if (count === 0) {
                await this.createCategories();
            }
            return Category.find().exec();
        });

        this.artPieces = await ArtPiece.estimatedDocumentCount().exec().then(async (count) => {
            if (count === 0) {
                await this.createArtPieces();
            }
            return ArtPiece.find().exec();
        });

        this.musea = await Museum.estimatedDocumentCount().exec().then(async (count) => {
            if (count === 0) {
                await this.createMusea();
            }
            return Museum.find().exec();
        });

        this.users = await User.estimatedDocumentCount().exec().then(async (count) => {
            if (count === 0) {
                await this.createUsers();
            }
            return User.find().exec();
        });
    }
}
export default Seeder;
