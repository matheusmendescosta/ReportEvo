import { Router } from "express";
import { CreateUserController } from "../controllers/create-user-controller";
import { CreateCompanyController } from "../controllers/create-company-controller";
import { CreateFormController } from "../controllers/create-form-controller";
import { CreateFormFieldController } from "../controllers/create-from-field-controller";
import { GetCompaniesController } from "../controllers/get-companies-controller";
import GetCompanyController from "../controllers/get-company-controller";
import { GetFormController } from "../controllers/get-form-controller";
import { GetFormsController } from "../controllers/get-forms-controller";

const route = Router();

route.post("/user", CreateUserController);
route.post("/company", CreateCompanyController);
route.post("/form", CreateFormController);
route.post("/form/:formId/field", CreateFormFieldController);

route.get("/companies", GetCompaniesController);
route.get("/company/:id", GetCompanyController);
route.get("/form/:id", GetFormController);
route.get("/forms", GetFormsController);

export { route };
