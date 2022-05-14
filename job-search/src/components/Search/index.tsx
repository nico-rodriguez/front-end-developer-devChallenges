import { Field, Form, Formik } from 'formik';
import './Search.css';

interface Values {
  search: string;
  fullTime: boolean;
  location: string;
  locationRadio: string;
}

export default function Search() {
  return (
    <main className='main'>
      <Formik
        initialValues={{
          search: '',
          fullTime: false,
          location: '',
          locationRadio: '',
        }}
        onSubmit={(values: Values) => {
          console.log(values);
        }}
      >
        <>
          <Form>
            <div className='form__search'>
              <div className='search-bar'>
                <Field
                  name='search'
                  placeholder='&#xe943; Title, companies, expertise or benefits'
                  className='search-bar__input'
                />
                <button type='submit' className='search-bar__button'>
                  Search
                </button>
              </div>
            </div>
          </Form>
          <section>
            <div className='form__filters'>
              <label className='full-time-filter'>
                <Field
                  type='checkbox'
                  name='fullTime'
                  className='full-time-filter__field'
                />
                Full time
              </label>
              <fieldset className='radio-filters'>
                <legend className='radio-filters__legend'>Location</legend>
                <Field
                  type='text'
                  name='location'
                  placeholder='&#xe80b; City, state, zip code or country'
                  className='location-text'
                />
                <label className='location-radio'>
                  <Field
                    type='radio'
                    name='locationRadio'
                    value='london'
                    id='london'
                  />
                  London
                </label>
                <label className='location-radio'>
                  <Field
                    type='radio'
                    name='locationRadio'
                    value='amsterdam'
                    id='amsterdam'
                  />
                  Amsterdam
                </label>
                <label className='location-radio'>
                  <Field
                    type='radio'
                    name='locationRadio'
                    value='new-york'
                    id='new-york'
                  />
                  New York
                </label>
                <label className='location-radio'>
                  <Field
                    type='radio'
                    name='locationRadio'
                    value='berlin'
                    id='berlin'
                  />
                  Berlin
                </label>
              </fieldset>
            </div>
            <div className='form__results'>results</div>
          </section>
        </>
      </Formik>
    </main>
  );
}
