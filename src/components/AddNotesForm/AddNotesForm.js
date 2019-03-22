import React from 'react';
import AppContext from '../../contexts/AppContext';
import config from '../../config';
import { Textarea} from '../Utils/Utils'
import './AddNotesForm.css'

class AddNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            nameValid: false,
            nameValidationMessage: '',
            contentValid: false,
            contentValidationMessage: '',
        }
    }
    static contextType = AppContext;

    updateName(name) {
        this.setState({name}, () => {this.validateName(name)});
    }

    validateName(name) {
        let errorMessage = this.state.nameValidationMessage;
        let error = this.state.nameValid;

        name = name.trim();
        if (name.length === 0) {
            errorMessage = 'Name must have at least 1 character';
            error = true;
        } else if (name.length > 20) {
            errorMessage = 'Name cannot be longer than 20 characters';
            error = true;
        } else {
            error = false;
            errorMessage = '';
        }

        this.setState({
            nameValid: !error,
            nameValidationMessage: errorMessage,
        });
    }

    validateContent(content) {
        let errorMessage = this.state.contentValidationMessage;
        let error = this.state.contentValid;
  
        content = content.trim();
        if (content.length === 0) {
          errorMessage = 'Content must have at least 1 character';
          error = true;
        }
        this.setState({
          contentValid: !error,
          contentValidationMessage: errorMessage
        });
      }

    handleSubmit(event) {
        event.preventDefault();
        const { name } = this.state;

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({folder_name: name})
        }
        fetch(`${config.API_ENDPOINT}/folders/`, options)
            .then(resp => {
                if (!resp.ok) {
                    throw new Error('Something went wrong')
                }
                return resp.json();
            })
            .then(respJson => {
                this.context.addFolder(respJson);
                this.props.history.push(`/homepage`);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    
    render() {
        return (
            <section>
                <h2>Create Note</h2>
                <form onSubmit={(event => this.handleSubmit(event))}>
                    <div>
                        <label htmlFor="folder-name-input">Title</label><br/>
                        <input type="text" placeholder="" id="folder-name-input" name="folder-name-input" onChange={event => this.updateName(event.target.value)}/>
                        {(!this.state.nameValid && this.state.nameValidationMessage) && <p className="error__message">{this.state.nameValidationMessage}</p>}<br/>
                        <label htmlFor="content-input">content</label><br/>
                        <Textarea type="text" placeholder="content" id="note-content-input" name="note-content-input" ref={this.contentInput} required/>
                    </div>
                    <button className='addFolderButton' type="submit" disabled={!this.state.nameValid}>Add Note</button>
                </form>
            </section>
        );
    }
}

export default AddNote;