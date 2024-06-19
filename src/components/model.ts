export default class KPI {
    timestamp: string;
    occup: number;
    cont_nb_per_s: number;
    main_nb_per_s: number;
    purity_nb_per_s: number;
    purity_mass_g_per_s: number;
    tag_Aluminium_nb_per_s: number;
    tag_Aluminium_mass_g_per_s: number;
    tag_Barquettes_Multicouches_nb_per_s: number;
    tag_Barquettes_Multicouches_mass_g_per_s: number;
    tag_ELA_nb_per_s: number;
    tag_ELA_mass_g_per_s: number;
    tag_EMR_nb_per_s: number;
    tag_EMR_mass_g_per_s: number;
    tag_Films_non_valorisable_nb_per_s: number;
    tag_Films_non_valorisable_mass_g_per_s: number;
    tag_Films_plastiques_PE_nb_per_s: number;
    tag_Films_plastiques_PE_mass_g_per_s: number;
    tag_Films_plastiques_PP_nb_per_s: number;
    tag_Films_plastiques_PP_mass_g_per_s: number;
    tag_Gros_de_magasin_nb_per_s: number;
    tag_Gros_de_magasin_mass_g_per_s: number;
    tag_Inconnus_nb_per_s: number;
    tag_Inconnus_mass_g_per_s: number;
    tag_JRM_nb_per_s: number;
    tag_JRM_mass_g_per_s: number;
    tag_PE_PP_Barquette_nb_per_s: number;
    tag_PE_PP_Barquette_mass_g_per_s: number;
    tag_PE_PP_Bouteille_nb_per_s: number;
    tag_PE_PP_Bouteille_mass_g_per_s: number;
    tag_PET_C_Barquettes_Pots_nb_per_s: number;
    tag_PET_C_Barquettes_Pots_mass_g_per_s: number;
    tag_PET_C_Bouteilles_Flacon_nb_per_s: number;
    tag_PET_C_Bouteilles_Flacon_mass_g_per_s: number;
    tag_PET_F_Barquettes_Pots_nb_per_s: number;
    tag_PET_F_Barquettes_Pots_mass_g_per_s: number;
    tag_PET_F_Bouteilles_Flacon_nb_per_s: number;
    tag_PET_F_Bouteilles_Flacon_mass_g_per_s: number;
    tag_PET_F_Opaques_nb_per_s: number;
    tag_PET_F_Opaques_mass_g_per_s: number;
    tag_PS_nb_per_s: number;
    tag_PS_mass_g_per_s: number;
    tag_PSE_nb_per_s: number;
    tag_PSE_mass_g_per_s: number;
    tag_Refus_emballage_nb_per_s: number;
    tag_Refus_emballage_mass_g_per_s: number;
    tag_Vrai_refus_nb_per_s: number;
    tag_Vrai_refus_mass_g_per_s: number;
    tag_Acier_nb_per_s: number;
    tag_Acier_mass_g_per_s: number;

    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
        timestamp: string = "",
        occup: number = 0,
        cont_nb_per_s: number = 0,
        main_nb_per_s: number = 0,
        purity_nb_per_s: number = 0,
        purity_mass_g_per_s: number = 0,
        tag_Aluminium_nb_per_s: number = 0,
        tag_Aluminium_mass_g_per_s: number = 0,
        tag_Barquettes_Multicouches_nb_per_s: number = 0,
        tag_Barquettes_Multicouches_mass_g_per_s: number = 0,
        tag_ELA_nb_per_s: number = 0,
        tag_ELA_mass_g_per_s: number = 0,
        tag_EMR_nb_per_s: number = 0,
        tag_EMR_mass_g_per_s: number = 0,
        tag_Films_non_valorisable_nb_per_s: number = 0,
        tag_Films_non_valorisable_mass_g_per_s: number = 0,
        tag_Films_plastiques_PE_nb_per_s: number = 0,
        tag_Films_plastiques_PE_mass_g_per_s: number = 0,
        tag_Films_plastiques_PP_nb_per_s: number = 0,
        tag_Films_plastiques_PP_mass_g_per_s: number = 0,
        tag_Gros_de_magasin_nb_per_s: number = 0,
        tag_Gros_de_magasin_mass_g_per_s: number = 0,
        tag_Inconnus_nb_per_s: number = 0,
        tag_Inconnus_mass_g_per_s: number = 0,
        tag_JRM_nb_per_s: number = 0,
        tag_JRM_mass_g_per_s: number = 0,
        tag_PE_PP_Barquette_nb_per_s: number = 0,
        tag_PE_PP_Barquette_mass_g_per_s: number = 0,
        tag_PE_PP_Bouteille_nb_per_s: number = 0,
        tag_PE_PP_Bouteille_mass_g_per_s: number = 0,
        tag_PET_C_Barquettes_Pots_nb_per_s: number = 0,
        tag_PET_C_Barquettes_Pots_mass_g_per_s: number = 0,
        tag_PET_C_Bouteilles_Flacon_nb_per_s: number = 0,
        tag_PET_C_Bouteilles_Flacon_mass_g_per_s: number = 0,
        tag_PET_F_Barquettes_Pots_nb_per_s: number = 0,
        tag_PET_F_Barquettes_Pots_mass_g_per_s: number = 0,
        tag_PET_F_Bouteilles_Flacon_nb_per_s: number = 0,
        tag_PET_F_Bouteilles_Flacon_mass_g_per_s: number = 0,
        tag_PET_F_Opaques_nb_per_s: number = 0,
        tag_PET_F_Opaques_mass_g_per_s: number = 0,
        tag_PS_nb_per_s: number = 0,
        tag_PS_mass_g_per_s: number = 0,
        tag_PSE_nb_per_s: number = 0,
        tag_PSE_mass_g_per_s: number = 0,
        tag_Refus_emballage_nb_per_s: number = 0,
        tag_Refus_emballage_mass_g_per_s: number = 0,
        tag_Vrai_refus_nb_per_s: number = 0,
        tag_Vrai_refus_mass_g_per_s: number = 0,
        tag_Acier_nb_per_s: number = 0,
        tag_Acier_mass_g_per_s: number = 0
    ) {
        // 3. Initialisation des propiétés d'un pokémons.
        this.timestamp = timestamp;
        this.occup = occup;
        this.cont_nb_per_s = cont_nb_per_s;
        this.main_nb_per_s = main_nb_per_s;
        this.purity_nb_per_s = purity_nb_per_s;
        this.purity_mass_g_per_s = purity_mass_g_per_s;
        this.tag_Aluminium_nb_per_s = tag_Aluminium_nb_per_s;
        this.tag_Aluminium_mass_g_per_s = tag_Aluminium_mass_g_per_s;
        this.tag_Barquettes_Multicouches_nb_per_s = tag_Barquettes_Multicouches_nb_per_s;
        this.tag_Barquettes_Multicouches_mass_g_per_s = tag_Barquettes_Multicouches_mass_g_per_s;
        this.tag_ELA_nb_per_s = tag_ELA_nb_per_s;
        this.tag_ELA_mass_g_per_s = tag_ELA_mass_g_per_s;
        this.tag_EMR_nb_per_s = tag_EMR_nb_per_s;
        this.tag_EMR_mass_g_per_s = tag_EMR_mass_g_per_s;
        this.tag_Films_non_valorisable_nb_per_s = tag_Films_non_valorisable_nb_per_s;
        this.tag_Films_non_valorisable_mass_g_per_s = tag_Films_non_valorisable_mass_g_per_s;
        this.tag_Films_plastiques_PE_nb_per_s = tag_Films_plastiques_PE_nb_per_s;
        this.tag_Films_plastiques_PE_mass_g_per_s = tag_Films_plastiques_PE_mass_g_per_s;
        this.tag_Films_plastiques_PP_nb_per_s = tag_Films_plastiques_PP_nb_per_s;
        this.tag_Films_plastiques_PP_mass_g_per_s = tag_Films_plastiques_PP_mass_g_per_s;
        this.tag_Gros_de_magasin_nb_per_s = tag_Gros_de_magasin_nb_per_s;
        this.tag_Gros_de_magasin_mass_g_per_s = tag_Gros_de_magasin_mass_g_per_s;
        this.tag_Inconnus_nb_per_s = tag_Inconnus_nb_per_s;
        this.tag_Inconnus_mass_g_per_s = tag_Inconnus_mass_g_per_s;
        this.tag_JRM_nb_per_s = tag_JRM_nb_per_s;
        this.tag_JRM_mass_g_per_s = tag_JRM_mass_g_per_s;
        this.tag_PE_PP_Barquette_nb_per_s = tag_PE_PP_Barquette_nb_per_s;
        this.tag_PE_PP_Barquette_mass_g_per_s = tag_PE_PP_Barquette_mass_g_per_s;
        this.tag_PE_PP_Bouteille_nb_per_s = tag_PE_PP_Bouteille_nb_per_s;
        this.tag_PE_PP_Bouteille_mass_g_per_s = tag_PE_PP_Bouteille_mass_g_per_s;
        this.tag_PET_C_Barquettes_Pots_nb_per_s = tag_PET_C_Barquettes_Pots_nb_per_s;
        this.tag_PET_C_Barquettes_Pots_mass_g_per_s = tag_PET_C_Barquettes_Pots_mass_g_per_s;
        this.tag_PET_C_Bouteilles_Flacon_nb_per_s = tag_PET_C_Bouteilles_Flacon_nb_per_s;
        this.tag_PET_C_Bouteilles_Flacon_mass_g_per_s = tag_PET_C_Bouteilles_Flacon_mass_g_per_s;
        this.tag_PET_F_Barquettes_Pots_nb_per_s = tag_PET_F_Barquettes_Pots_nb_per_s;
        this.tag_PET_F_Barquettes_Pots_mass_g_per_s = tag_PET_F_Barquettes_Pots_mass_g_per_s;
        this.tag_PET_F_Bouteilles_Flacon_nb_per_s = tag_PET_F_Bouteilles_Flacon_nb_per_s;
        this.tag_PET_F_Bouteilles_Flacon_mass_g_per_s = tag_PET_F_Bouteilles_Flacon_mass_g_per_s;
        this.tag_PET_F_Opaques_nb_per_s = tag_PET_F_Opaques_nb_per_s;
        this.tag_PET_F_Opaques_mass_g_per_s = tag_PET_F_Opaques_mass_g_per_s;
        this.tag_PS_nb_per_s = tag_PS_nb_per_s;
        this.tag_PS_mass_g_per_s = tag_PS_mass_g_per_s;
        this.tag_PSE_nb_per_s = tag_PSE_nb_per_s;
        this.tag_PSE_mass_g_per_s = tag_PSE_mass_g_per_s;
        this.tag_Refus_emballage_nb_per_s = tag_Refus_emballage_nb_per_s;
        this.tag_Refus_emballage_mass_g_per_s = tag_Refus_emballage_mass_g_per_s;
        this.tag_Vrai_refus_nb_per_s = tag_Vrai_refus_nb_per_s;
        this.tag_Vrai_refus_mass_g_per_s = tag_Vrai_refus_mass_g_per_s;
        this.tag_Acier_nb_per_s = tag_Acier_nb_per_s;
        this.tag_Acier_mass_g_per_s = tag_Acier_mass_g_per_s;
    }
}
