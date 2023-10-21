import { onHourDate } from "./src/configDataHora";
import { controleDeTela } from "./src/controleDeTela";
import { gerenciadorDeDescricao } from "./src/gerenciarDesc";
import { projects } from "./src/gerenciarProjects";

onHourDate();
projects();
controleDeTela();
gerenciadorDeDescricao();