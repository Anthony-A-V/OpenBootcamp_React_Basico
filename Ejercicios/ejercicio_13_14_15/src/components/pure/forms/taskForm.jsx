import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const TaskForm = ({ add, length }) => {
  const nameRef = useRef('');
  const descriptionRef = useRef('');
  const levelRef = useRef(LEVELS.NORMAL);

  const initialValues = {
    name: '',
    description: '',
    level: LEVELS.NORMAL,
  };

  const taskSchema = Yup.object().shape({
    name: Yup.string().min(6, 'Name too short').required('Name is required'),
    description: Yup.string().min(6, 'Description too short').required('Description required'),
  });

  function addTask(e) {
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value,
    );
    add(newTask);
  }

  const normalStyle = {
    color: 'blue',
    fontWeight: 'bold',
  };

  const urgentStyle = {
    color: 'yellow',
    fontWeight: 'bold',
  };

  const blockingStyle = {
    color: 'tomato',
    fontWeight: 'bold',
  };

  return (
    <div>
      <h4>Register Formik</h4>
      <Formik initialValues={initialValues} validationSchema={taskSchema} onSubmit={addTask}>
        {({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
          <Form>
            <label style={{ paddingRight: '1rem' }} htmlFor="name">
              Tarea:{' '}
            </label>
            <Field
              innerRef={nameRef}
              autoFocus
              id="name"
              name="name"
              placeholder="Your task name "
              type="text"
            />
            {/* Name Errors */}
            {errors.name && touched.name && (
              <ErrorMessage component="div" name="name"></ErrorMessage>
            )}
            <label style={{ paddingRight: '1rem' }} htmlFor="description">
              Descripción:{' '}
            </label>
            <Field
              innerRef={descriptionRef}
              id="description"
              name="description"
              placeholder="Your task description"
              type="text"
            />
            {/* Description Errors */}
            {errors.description && touched.description && (
              <ErrorMessage component="div" name="description"></ErrorMessage>
            )}
            <label style={{ paddingRight: '1rem' }} htmlFor="levelRef">
              Nivel:
            </label>
            <Field innerRef={levelRef} id="level" name="level" as="select">
              <option style={normalStyle} value={LEVELS.NORMAL}>
                Normal
              </option>
              <option style={urgentStyle} value={LEVELS.URGENT}>
                Urgent
              </option>
              <option style={blockingStyle} value={LEVELS.BLOCKING}>
                Blocking
              </option>
            </Field>
            <button type="submit" className="btn btn-success btn-lg ms-2">
              {length > 0 ? 'Add New Task' : 'Create your First Task'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
};

export default TaskForm;
