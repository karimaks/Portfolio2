const Detail = ({params, searchParams}) => {
    return (
        <div>
           Le parametre vaut {params.id}
           Le parametre de recherche vaut {searchParams.nom}
        </div>
    );
}

export default Detail;