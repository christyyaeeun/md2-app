/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Order } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function OrderUpdateForm(props) {
  const {
    id: idProp,
    order,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    fName: "",
    lName: "",
    phone: "",
    letters: "",
    colors: "",
    details: "",
  };
  const [fName, setFName] = React.useState(initialValues.fName);
  const [lName, setLName] = React.useState(initialValues.lName);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [letters, setLetters] = React.useState(initialValues.letters);
  const [colors, setColors] = React.useState(initialValues.colors);
  const [details, setDetails] = React.useState(initialValues.details);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = orderRecord
      ? { ...initialValues, ...orderRecord }
      : initialValues;
    setFName(cleanValues.fName);
    setLName(cleanValues.lName);
    setPhone(cleanValues.phone);
    setLetters(cleanValues.letters);
    setColors(cleanValues.colors);
    setDetails(cleanValues.details);
    setErrors({});
  };
  const [orderRecord, setOrderRecord] = React.useState(order);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Order, idProp) : order;
      setOrderRecord(record);
    };
    queryData();
  }, [idProp, order]);
  React.useEffect(resetStateValues, [orderRecord]);
  const validations = {
    fName: [{ type: "Required" }],
    lName: [{ type: "Required" }],
    phone: [{ type: "Required" }],
    letters: [{ type: "Required" }],
    colors: [],
    details: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          fName,
          lName,
          phone,
          letters,
          colors,
          details,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Order.copyOf(orderRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "OrderUpdateForm")}
      {...rest}
    >
      <TextField
        label="F name"
        isRequired={true}
        isReadOnly={false}
        value={fName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fName: value,
              lName,
              phone,
              letters,
              colors,
              details,
            };
            const result = onChange(modelFields);
            value = result?.fName ?? value;
          }
          if (errors.fName?.hasError) {
            runValidationTasks("fName", value);
          }
          setFName(value);
        }}
        onBlur={() => runValidationTasks("fName", fName)}
        errorMessage={errors.fName?.errorMessage}
        hasError={errors.fName?.hasError}
        {...getOverrideProps(overrides, "fName")}
      ></TextField>
      <TextField
        label="L name"
        isRequired={true}
        isReadOnly={false}
        value={lName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fName,
              lName: value,
              phone,
              letters,
              colors,
              details,
            };
            const result = onChange(modelFields);
            value = result?.lName ?? value;
          }
          if (errors.lName?.hasError) {
            runValidationTasks("lName", value);
          }
          setLName(value);
        }}
        onBlur={() => runValidationTasks("lName", lName)}
        errorMessage={errors.lName?.errorMessage}
        hasError={errors.lName?.hasError}
        {...getOverrideProps(overrides, "lName")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={true}
        isReadOnly={false}
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              phone: value,
              letters,
              colors,
              details,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Letters"
        isRequired={true}
        isReadOnly={false}
        value={letters}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              phone,
              letters: value,
              colors,
              details,
            };
            const result = onChange(modelFields);
            value = result?.letters ?? value;
          }
          if (errors.letters?.hasError) {
            runValidationTasks("letters", value);
          }
          setLetters(value);
        }}
        onBlur={() => runValidationTasks("letters", letters)}
        errorMessage={errors.letters?.errorMessage}
        hasError={errors.letters?.hasError}
        {...getOverrideProps(overrides, "letters")}
      ></TextField>
      <TextField
        label="Colors"
        isRequired={false}
        isReadOnly={false}
        value={colors}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              phone,
              letters,
              colors: value,
              details,
            };
            const result = onChange(modelFields);
            value = result?.colors ?? value;
          }
          if (errors.colors?.hasError) {
            runValidationTasks("colors", value);
          }
          setColors(value);
        }}
        onBlur={() => runValidationTasks("colors", colors)}
        errorMessage={errors.colors?.errorMessage}
        hasError={errors.colors?.hasError}
        {...getOverrideProps(overrides, "colors")}
      ></TextField>
      <TextField
        label="Details"
        isRequired={false}
        isReadOnly={false}
        value={details}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fName,
              lName,
              phone,
              letters,
              colors,
              details: value,
            };
            const result = onChange(modelFields);
            value = result?.details ?? value;
          }
          if (errors.details?.hasError) {
            runValidationTasks("details", value);
          }
          setDetails(value);
        }}
        onBlur={() => runValidationTasks("details", details)}
        errorMessage={errors.details?.errorMessage}
        hasError={errors.details?.hasError}
        {...getOverrideProps(overrides, "details")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || order)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || order) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
