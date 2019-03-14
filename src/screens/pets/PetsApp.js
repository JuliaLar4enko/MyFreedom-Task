 import React from 'react';

import ExchangeRate from '../../components/pets/ExchangeRate';
import CurrentWeather from '../../components/pets/CurrentWeather';
import Form from '../../components/pets/Form';
import Settings from '../../components/pets/Settings';
import PetsList from '../../components/pets/PetsList';


class PetsApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arr: [
                {
                    date: '21.11.2017',
                    time: '17:40',
                    pet: "Oskar",
                    owner: "Max",
                    description: "It bites"
                },
                {
                    date: '08.11.2018',
                    time: '09:40',
                    pet: "Barsik",
                    owner: "Vika",
                    description: "Sharp teeth"
                },
                {
                    date: '16.01.2019',
                    time: '09:40',
                    pet: "Marshmello",
                    owner: "Nastya",
                    description: "Soft paws"
                }
            ],
            date: "",
            time: "",
            pet: "",
            owner: "",
            description: "",
            search: "",
            order: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const {date, time, pet, owner, description, arr} = this.state;

        const client = {
            date: date,
            time: time,
            pet: pet,
            owner: owner,
            description: description
        };

        const copyArr = [...arr];
        copyArr.push(client);
        this.setState({arr: copyArr, date: "", time: "", pet: "", owner: "", description: ""});
    }


    handleInput(e) {
        const {name, value} = e.target;
        this.setState( { [name]: value } );
    }


    handleDelete(index) {

        const {arr} = this.state;
        const copyArr = [...arr];
        copyArr.splice(index, 1);

        this.setState({arr: copyArr});
    }

    handleSort(e) {
        const {value} = e.target;
        const {arr} = this.state;
        let copyArr = [...arr];

        switch (value) {
            case "az":
                copyArr.sort((a, b) => {
                    return (a.pet.toLowerCase() > b.pet.toLowerCase()) ? 1 : -1;
                });
                break;
            case "za":
                copyArr.sort((a, b) => {
                    return (a.pet.toLowerCase() < b.pet.toLowerCase()) ? 1 : -1;
                });
                break;
        }

        console.log("Sorted!", this.state);
        this.setState({arr: copyArr, order: value});
    }

    render() {
        console.log("render", this.state);

        const {date, time, pet, owner, description, arr, search} = this.state;

        let copyArr = [...arr];

        if (search) {
            copyArr = copyArr.filter(client => {
                return client.pet.toLowerCase().includes(search.toLowerCase());
            });
        }


        return (
            <div>
                <CurrentWeather />
                <ExchangeRate />
                <div className="container pt-3">
                <div className="row">
                    <div className="col-8 offset-2">
                        <Form
                            date={date}
                            time={time}
                            pet={pet}
                            owner={owner}
                            description={description}
                            handleInput={this.handleInput}
                            handleSubmit={this.handleSubmit}
                        />
                        <Settings
                            search={search}
                            handleInput={this.handleInput}
                            handleSort={this.handleSort}
                        />
                        <br />
                        <PetsList
                            array={copyArr}
                            handleDelete={this.handleDelete}
                        />
                    </div>
                </div>
            </div>
            </div>
        )
    }

}

export default PetsApp;