import React from 'react';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <div className="columns">
          <div className="column">
            <div class="field">
              <label class="label">ФИО</label>
              <div class="control">
                <input class="input" type="text" placeholder="Text input" />
              </div>
            </div>
          </div>	
          <div className="column">
            <div class="field">
              <label class="label">Название компании</label>
              <div class="control">
                <input class="input" type="text" placeholder="Text input" />
              </div>
            </div>
          </div>	
        </div>


        <div className="columns">
          <div className="column">
            <div class="field">
              <label class="label">Сумма претензии</label>
              <div class="control">
                <input class="input" type="text" placeholder="Text input" />
              </div>
            </div>
          </div>	
          <div className="column">
            <div class="field">
              <label class="label">Процент заявки</label>
              <div class="control">
                <input class="input" type="text" placeholder="Text input" />
              </div>
            </div>
          </div>	
        </div>

        <div className="columns">
          <div className="column">
            <div class="field">
              <label class="label">Дата поставки</label>
              <div class="control">
                <input class="input" type="text" placeholder="Text input" />
              </div>
            </div>
          </div>	
          <div className="column">
            <div class="field">
              <label class="label">Юрлицо контрагента</label>
              <div class="control">
                <input class="input" type="text" placeholder="Text input" />
              </div>
            </div>
          </div>	
        </div>


<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Сгенерировать PDF претензии</button>
  </div>
</div>
        	
      </div>
    ); 
  }
}

export default Form;
