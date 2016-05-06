import {
  getMuiTheme
} from 'material-ui/styles';
import {
  Paper,
  RaisedButton
} from 'material-ui';
import IconContentSend from 'material-ui/svg-icons/content/send';
import {
  Form
} from 'formsy-react';
import {
  FormsyText
} from 'formsy-material-ui';
import BaseComponent from 'components/BaseComponent';
import StyleResizable from 'utils/styleResizable';
import Section from 'components/Section';

export default class Contact extends BaseComponent {
  constructor () {
    super();

    this.state = {
      theme: getMuiTheme(),
      canSubmit: false
    };
  }

  submit = (data, resetForm) => {
    alert(JSON.stringify(data, null, 4));
    resetForm();
    this.resetForm();
  }

  resetForm = () => {
    this.refs.form.reset();
  }

  enableSubmit = () => {
    this.setState({
      canSubmit: true
    });
  }

  disableSubmit = () => {
    this.setState({
      canSubmit: false
    });
  }

  get carouselProps () {
    return {
      dragging: true,
      slidesToShow: 1,
      slidesToScroll: 'auto'
    };
  }

  get styles () {
    let styles = {
      container: {
        margin: '0 auto',
        padding: '1em',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      block: {
        width: '50%',
        margin: '0 1em'
      },
      input: {
        width: '45%',
        margin: '0 2%'
      },
      listElement: {
        paddingRight: '2em'
      }
    };

    if (StyleResizable.isDeviceSize(StyleResizable.sizes.SMALL)) {
      Object.assign(styles.container, {
        flexDirection: 'column'
      });

      Object.assign(styles.block, {
        width: '100%',
        margin: '1em 0'
      });

      Object.assign(styles.input, {
        width: '94%',
        margin: 0
      });

      Object.assign(styles.listElement, {
        paddingRight: 0
      });
    }

    return styles;
  }

  get errorMessages () {
    return {
      alphaNumeric: 'Introduce sólo letras y números',
      numeric: 'Introduce sólo números',
      email: 'Introduce un correo electrónico válido'
    };
  }

  render () {
    const {
      ...other
    } = this.props;

    const styles = this.styles;

    return (<Section className='contact' {...other}>
      <Section style={{
        textAlign: 'left'
      }}>
        <h2
          style={{
            color: this.state.theme.palette.textColor,
            fontWeight: 'lighter'
          }}>
          Contacto
        </h2>
      </Section>
      <Section
        style={Object.assign({}, styles.container, {
          display: 'block',
          textAlign: 'left'
        })}>
        <Paper style={{
          padding: '1em'
        }}>
          <Form
            ref='form'
            onSubmit={this.submit}
            className='form'
            onValid={this.enableSubmit}
            onInvalid={this.disableSubmit}>
            <ul style={{
              listStyle: 'none'
            }}>
              <li style={styles.listElement}>
                <FormsyText
                  name='name'
                  validations='isAlphanumeric'
                  validationError={this.errorMessages.alphaNumeric}
                  required
                  hintText='Indica tu nombre'
                  floatingLabelText='* Nombre'
                  style={styles.input}
                />
                <FormsyText
                  name='company'
                  validations='isAlphanumeric'
                  validationError={this.errorMessages.alphaNumeric}
                  hintText='Indica el nombre de tu empresa'
                  floatingLabelText='Empresa'
                  style={styles.input}
                  />
              </li>
              <li style={styles.listElement}>
                <FormsyText
                  name='email'
                  validations='isEmail'
                  validationError={this.errorMessages.email}
                  required
                  hintText='Indica tu correo electrónico'
                  floatingLabelText='* Correo electrónico'
                  style={styles.input}
                />
                <FormsyText
                  name='phone'
                  validations='isNumeric'
                  validationError={this.errorMessages.numeric}
                  hintText='Indica tu teléfono de contacto'
                  floatingLabelText='Teléfono'
                  style={styles.input}
                  />
              </li>
              <li style={styles.listElement}>
                <FormsyText
                  name='message'
                  required
                  multiLine
                  rows={2}
                  hintText='Escribe un mensaje para nosotros...'
                  floatingLabelText='* Mensaje'
                  style={Object.assign({}, styles.input, {
                    width: '94%'
                  })}
                />
              </li>
              <li style={Object.assign({}, styles.listElement, {
                textAlign: 'right'
              })}>
                <RaisedButton
                  type='submit'
                  label='Enviar'
                  primary
                  icon={<IconContentSend />}
                  disabled={!this.state.canSubmit}
                  style={{}}
                />
              </li>
            </ul>
          </Form>
        </Paper>
      </Section>
    </Section>);
  };
}
