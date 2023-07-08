require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
   
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


  const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods: [String]
  });

  

  var Person = mongoose.model('Person', personSchema);

 /* const islem = new Person({name: "Jane Fond", age: 60, favoriteFoods: ["eggs", "fish", "fresh fruit"]});
    islem.save()
    .then(() => {
      console.log('User created successfully');
    })
    .catch((error) => {
      console.error('Error creating user:', error);
    });
*/

    var arrayOfPeople = [
      {name: "MedSalah", age: 27, favoriteFoods: ["Tacos Pasta"]},
      {name: "Firas", age: 28, favoriteFoods: ["Spaghetty chicken"]},
      {name: "Majed", age: 29, favoriteFoods: ["Chocolate"]}
    ];
    
  /*
  Person.create(arrayOfPeople)
  .then(createdUsers => {
    console.log('User created successfully:', createdUsers);
  })
  .catch(error => {
    console.error('Error creating user:', error);
  });*/

/*
var searchname = "Firas";

    Person.find({"name" :searchname })
    .then(users => {
      console.log('Found users:', users);
    })
    .catch(error => {
      console.error('Error finding users:', error);
    });*/

  /*
    var searchbyfood="fresh fruit";
    Person.findOne({"favoriteFoods":searchbyfood})
    .then(users => {
      console.log('Found users:', users);
    })
    .catch(error => {
      console.error('Error finding users:', error);
    });
   */

  /*
    const searchById = "649ff90b67d94eed65b7dc2f";
    Person.findById(searchById)
      .then(users => {
        console.log('Found users:', users);
      })
      .catch(error => {
        console.error('Error finding users:', error);
      });
*/

      const findEditThenSave = (PersonId) => {
        const foodToAdd = 'hamburger';
        return Person.findById(PersonId)
          .then(function (person) {
              person.favoriteFoods.push(foodToAdd);
              return person.save();
            })
          .then(updatedPerson => updatedPerson)
          .catch(error => {
            console.error(error);
          });
      };



      const findAndUpdate = (personName) => {
        const ageToSet = 20;
      
        return Person.findOneAndUpdate({ name: personName }, { age: ageToSet }, { new: true })
          .then((updatedDoc) => {
            return updatedDoc;
          })
          .catch((err) => {
            console.log(err);
          });
      };


      const removeById = (personId) => {
        return Person.findByIdAndRemove(personId)
          .then((removedDoc) => {
            return removedDoc;
          })
          .catch((err) => {
            console.log(err);
          });
      };

      const removeManyPeople = () => {
        const nameToRemove = "islem";
        return Person.remove({ name: nameToRemove })
          .then((response) => {
            return response;
          })
          .catch((err) => {
            console.log(err);
          });
      };

      const findQuery = Model.find({ name: "Firas" });
const findAndSortQuery = Person.find({ age: 55 })
  .sort({ name: -1 })
  .limit(5)
  .select({ favoriteFoods: 0 });

findAndSortQuery.exec()
  .then((people) => {
  })
  .catch((error) => {
    console.log(error);
  });
    

     

      