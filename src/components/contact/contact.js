import React from 'react';
import { ContainerMaxWith, H2, Row, Column, InputWrapper,
  ButtonSubmit, FeedbackError, FeedbackForm, FeedbackSuccess } from 'StyledComponents';
import { send, init } from 'emailjs-com';
import InputMask from 'react-input-mask';

const EmaiJsConfig = {
  id: 'user_tkDQCaq2YiASLCw3XjeQS',
  templateId: 'template_mDAF1sNK',
  serviceId: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
};

export default class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: null,
      email: null,
      telefone: null,
      mensagem: null,
      feedback: null,
      isSending: false,
      success: false,
    };
  }

  componentDidMount() {
    init(EmaiJsConfig.id);
  }

  handleChange = ({target: {value, id}}) => this.setState({[id]: value});

  updateFeedback = (feedback, event) => {
    this.setState({feedback});
    event.preventDefault();
    return false;
  }

  submitForm = () => {
    const { nome: from_name, email, telefone, mensagem: message_html } = this.state;
    send(EmaiJsConfig.serviceId, EmaiJsConfig.templateId, {
      from_name,
      message_html,
      email,
      telefone,
      to_name: 'ND Engenharia',
    }, EmaiJsConfig.id)
      .then(() => this.setState({isSending: false, success: true}))
      .catch((error) => this.setState({
        isSending: false,
        feedback: `Não foi possível enviar sua mensagem. ${JSON.parse(error.text).error}`
      }));
  }

  submitHandler = (event) => {
    const { nome, email, telefone, mensagem } = this.state;

    if (!nome || !email || !telefone || !mensagem ) {
      this.updateFeedback('Preencha todos os campos.', event);
    } else if (email && !/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email)) {
      this.updateFeedback('Digite um email válido.', event);
    } else if (telefone &&
      telefone.replace(/\D/g, '').length < 10) {
      this.updateFeedback('Digite um telefone válido.', event);
    } else {
      this.setState({feedback: null, isSending: true}, this.submitForm);
    }
    event.preventDefault();
  }

  render() {
    const { feedback, isSending, success } = this.state;
    return (
      <ContainerMaxWith>
        <H2>Mande uma mensagem pra nós</H2>
        <Row alignItems={'normal'}>
          <Column>
            <form>
              <InputWrapper>
                <label htmlFor='nome'>Nome:*</label>
                <input onChange={this.handleChange} type='text' id='nome' placeholder='Seu nome' />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor='email'>Email:*</label>
                <input onChange={this.handleChange} type='email' id='email' placeholder='Seu e-mail' />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor='telefone'>Telefone:*</label>
                <InputMask
                  {...this.props}
                  maskChar=' '
                  mask='(99) 9999 99999'
                  onChange={this.handleChange}
                  type='text'
                  id='telefone'
                  placeholder='Seu telefone' />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor='mensagem'>Mensagem:*</label>
                <textarea id='mensagem' onChange={this.handleChange} rows="4" cols="50" placeholder='Sua Mensagem'></textarea>
              </InputWrapper>
              <ButtonSubmit onClick={this.submitHandler} type='submit'>Enviar</ButtonSubmit>
              <div className="g-recaptcha" data-sitekey="6Lfr2FQUAAAAAMO1euP7ooGpq9r5EuozZBAOeonH"></div>
              {feedback && <FeedbackError>{feedback}</FeedbackError>}
              {isSending && <FeedbackForm>Enviando...</FeedbackForm>}
              {success && <FeedbackSuccess>Enviado com sucesso. Em breve retornaremos seu contato.</FeedbackSuccess>}
            
            </form>
          </Column>
        </Row>
      </ContainerMaxWith>
    )
  }
}