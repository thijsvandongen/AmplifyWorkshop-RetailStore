import * as React from 'react';
import {
  Button,
  Flex,
  Grid,
  SelectField,
  SliderField,
  TextField,
} from '@aws-amplify/ui-react';
import { getOverrideProps } from './utils';
import { fetchByPath, validateField } from '../ui-components/utils';
import { generateClient } from '@aws-amplify/api';
export default function ProductUpdateForm(props) {
  const {
    id: idProp,
    product: productModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    description: "",
    categoryProductsId: "",
    price: "",
    current_stock: "",
    image: "",
    rating: 0,
    style: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [categoryID, setCategoryID] = React.useState(initialValues.categoryProductsId);
  const [price, setPrice] = React.useState(initialValues.price);
  const [current_stock, setCurrent_stock] = React.useState(
    initialValues.current_stock
  );
  const [image, setImage] = React.useState(initialValues.image);
  const [rating, setRating] = React.useState(initialValues.rating);
  const [style, setStyle] = React.useState(initialValues.style);
  const [errors, setErrors] = React.useState({});
  const [categories, setCategories] = React.useState([]);
  const [styles, setStyles] = React.useState([]);
  const client = generateClient({
    authMode: 'userPool'
  });

  const resetStateValues = () => {
    const cleanValues = productRecord
      ? { ...initialValues, ...productRecord }
      : initialValues;
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setCategoryID(cleanValues.categoryProductsId);
    setPrice(cleanValues.price);
    setCurrent_stock(cleanValues.current_stock);
    setImage(cleanValues.image);
    setRating(cleanValues.rating);
    setStyle(cleanValues.style);
    setErrors({});
  };

  const fetchProduct = async (id) => {
    const { data: product, errors } = await client.models.Product.get({ id })
    return product;
  }
  const [productRecord, setProductRecord] = React.useState(productModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await fetchProduct(idProp)
        : productModelProp;
      setProductRecord(record);
    };
    queryData();
  }, [idProp, productModelProp]);
  React.useEffect(resetStateValues, [productRecord]);

  React.useEffect(() => {
    async function queryCategories() {
      try {
        const { data: categories, errors } = await client.models.Category.list();
        setCategories(categories.sort((a,b) => ((a.name > b.name) ? 1 : -1 )));
      } catch (error) {
          console.log("Error retrieving categories", error);
      }
    }

    queryCategories();
  }, []);

  React.useEffect(() => {
    async function queryStyles() {
      try {
        const { data: categoryInfo, errors } = await client.models.Category.get({
          id: categoryID
        });
        setStyles(Object.values(categoryInfo.styles));
      } catch (error) {
          console.log("Error retrieving styles", error);
      }
    }

    if (categoryID !== '') {
      queryStyles();
    }
  }, [categoryID]);

  const validations = {
    name: [{ type: "Required" }],
    description: [],
    categoryID: [{ type: "Required" }],
    price: [],
    current_stock: [],
    image: [],
    rating: [],
    style: [],
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
          name,
          description,
          categoryID,
          price,
          current_stock,
          image,
          rating,
          style,
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
          const modelFieldsToSave = {
            name: modelFields.name,
            description: modelFields.description,
            price: modelFields.price,
            current_stock: modelFields.current_stock,
            image: modelFields.image,
            rating: modelFields.rating,
            style: modelFields.style,
            categoryProductsId: modelFields.categoryID
          };
          await client.models.Product.update({
            id: productRecord.id,
            ...modelFieldsToSave
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProductUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              description,
              categoryID,
              price,
              current_stock,
              image,
              rating,
              style,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              categoryID,
              price,
              current_stock,
              image,
              rating,
              style,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <SelectField
        label="Category"
        placeholder="Please select an option"
        value={categoryID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              categoryID: value,
              price,
              current_stock,
              image,
              rating,
              style,
            };
            const result = onChange(modelFields);
            value = result?.categoryID ?? value;
          }
          if (errors.categoryID?.hasError) {
            runValidationTasks("categoryID", value);
          }
          setCategoryID(value);
        }}
        onBlur={() => runValidationTasks("categoryID", categoryID)}
        errorMessage={errors.categoryID?.errorMessage}
        hasError={errors.categoryID?.hasError}
        {...getOverrideProps(overrides, "categoryID")}
      >
        {categories.map((c) => {
          return (
            <option key={c.id} value={c.id}>{c.name}</option>
          );
        })
        }
      </SelectField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              categoryID,
              price: value,
              current_stock,
              image,
              rating,
              style,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Current stock"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={current_stock}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value, 10))
            ? e.target.value
            : parseInt(e.target.value, 10);
          if (onChange) {
            const modelFields = {
              name,
              description,
              categoryID,
              price,
              current_stock: value,
              image,
              rating,
              style,
            };
            const result = onChange(modelFields);
            value = result?.current_stock ?? value;
          }
          if (errors.current_stock?.hasError) {
            runValidationTasks("current_stock", value);
          }
          setCurrent_stock(value);
        }}
        onBlur={() => runValidationTasks("current_stock", current_stock)}
        errorMessage={errors.current_stock?.errorMessage}
        hasError={errors.current_stock?.hasError}
        {...getOverrideProps(overrides, "current_stock")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              categoryID,
              price,
              current_stock,
              image: value,
              rating,
              style,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <SliderField
        label="Rating"
        isDisabled={false}
        isRequired={false}
        value={rating}
        max={5}
        min={0}
        step={0.5}
        onChange={(e) => {
          let value = e;
          if (onChange) {
            const modelFields = {
              name,
              description,
              categoryID,
              price,
              current_stock,
              image,
              rating: value,
              style,
            };
            const result = onChange(modelFields);
            value = result?.rating ?? value;
          }
          if (errors.rating?.hasError) {
            runValidationTasks("rating", value);
          }
          setRating(value);
        }}
        onBlur={() => runValidationTasks("rating", rating)}
        errorMessage={errors.rating?.errorMessage}
        hasError={errors.rating?.hasError}
        {...getOverrideProps(overrides, "rating")}
      ></SliderField>
      <SelectField
        label="Style"
        placeholder="Select a style"
        value={style}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              categoryID,
              price,
              current_stock,
              image,
              rating,
              style: value,
            };
            const result = onChange(modelFields);
            value = result?.style ?? value;
          }
          if (errors.style?.hasError) {
            runValidationTasks("style", value);
          }
          setStyle(value);
        }}
        onBlur={() => runValidationTasks("style", style)}
        errorMessage={errors.style?.errorMessage}
        hasError={errors.style?.hasError}
        {...getOverrideProps(overrides, "style")}
      >
        {styles.map((s) => {
          return (
            <option key={s} value={s}>{s}</option>
          );
        })
        }
      </SelectField>
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
          isDisabled={!(idProp || productModelProp)}
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
              !(idProp || productModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}