import { AntiRacismResource } from '../models/antiracism-model.js';

const resources = [
    new AntiRacismResource(
        1,
        "Pequeno Manual Antirracista",
        "Livro que apresenta caminhos de reflexão para aqueles que queiram aprofundar sua percepção sobre racismo.",
        "livro"
    ),
    new AntiRacismResource(
        2,
        "Documentário '13ª Emenda'",
        "Análise da interseção entre raça, justiça e encarceramento em massa nos EUA.",
        "filme"
    ),
    new AntiRacismResource(
        3,
        "Instituto Identidades do Brasil",
        "Organização que promove a igualdade racial através da educação.",
        "organização"
    )
];

export default resources;