This project contains implementation of a movie-director server which is implemented using mysql, expressjs and sequelize.

To run this project, run <code>nodemon app.js</code>

It have GET,PUT,POST,DELETE functions for two urls.

for movies: <code>localhost:8080/api/movies/</code>
for directors: <code>localhost:8080/api/directors/</code>

I used Postman for requesting functions.

Dependencies:-
<code>npm install nodemon -g</code>
<code>npm i -D eslint eslint-config-airbnb-base eslint-plugin-import</code>
<code>npm install sequelize</code>
<code>npm install sequelize-cli</code>
<code>npm install mysql</code>
<code>npm install mysql2</code>
<code>npm install express --save</code>
<code>npm install morgan --save</code>
<code>npm install winston --save</code>

Steps:-
1. Run <code>sequelize init</code>
2. Modify config according to your data in development section.
3. Run <code>sequelize model:create --name Directors --attributes dname:string</code> for directors and movies code, to create table model for them.
4. Run <code>sequelize migration:create --name add-email-to-user</code> for any update in existing model.
5. Define ```up``` and ```down``` in migration file.
6. Run <code>sequelize db:migrate</code> to implement the migration (updates) in existing models.
7. Run <code>sequelize seed:create --name create-directors</code> for seeding data in database.
8. Run <code>sequelize db:seed:all</code> to run the seed file
9. Then run the file either with node or nodemon.