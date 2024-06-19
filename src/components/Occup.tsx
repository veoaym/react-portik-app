import React, { FunctionComponent, useState, useEffect } from 'react';
import { Table, TableContainer, TableHead, TableCell, Paper, TableRow, TableBody } from '@mui/material';
import KPI from './model'

/*interface KPIData {
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
    
    }*/
    
    


const Occup: FunctionComponent = () => {

    const [data, setData] = useState<KPI | null>(null);

    /*useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/getKPI');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);*/
    useEffect(() => {
        fetch(`http://localhost:8000/getKPI`)
        .then(response => response.json())
        .then(data => {
            setData(data);
    
        })
       
      }, []);

    return (
        <div>
            <TableContainer
                component={Paper}
                variant="outlined"
                sx={{ border: 'none' }}
>
                <Table aria-label="demo table">
                    <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell><b>Occupation</b></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>{data ? data.occup : 'Loading...'}</TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Occup;
/*import React, { FunctionComponent } from 'react';

const Occup: FunctionComponent = () => {
    return (
        <div>
            
            <h2>Occupation </h2>
            <p>float compris entre 0 et 1</p>
        </div>
    );
}

export default Occup;*/
