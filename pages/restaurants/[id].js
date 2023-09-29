import Layout from '../../components/layout';
import { getAllIds, getData } from '../../lib/data-firebase';

// define a getStaticProps() function to have next.js retrieve data to use for the dynamic page
// - this name is defined by next.js
export async function getStaticProps( { params } ) {
  const itemData = await getData(params.id);
  //now itemData has desserts property which may have an array of desserts
  return {
    props: {
      itemData
    }
  };
}

// define a getStaticPaths() function to tell next.js all valid URLs: 1,2,3,4 
// - this name is defined by next.js
export async function getStaticPaths() {
  const paths = await getAllIds();
  return {
    paths,
    fallback: false
  };
}

// export our dynamically routed page component Entry
export default function Entry( { itemData } ) {
  return (
    <Layout>
      <article className="card text-center mt-3">
        <div className="card-body">
          <h5 className="card-title">{itemData.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{itemData.phone}</h6>
          <a href={itemData.website} className="card-link link-primary">{itemData.website}</a>
          
        
          <div className = "mt-3">
          <h7>Preview their Dessert Menu</h7>
            <ul className = "col-3">
            <li> {itemData.dessert1}</li>
            <li> {itemData.dessert2}</li>
            <li> {itemData.dessert3}</li>
            </ul>
            
            <ul className = "col-3">
              {/* <li>
                {itemData.desserts[0]}
                </li>
              <li>
                {itemData.desserts[1]}
                </li>
            <li>
                {itemData.desserts[2]}
                </li> */}
                {/* {itemData.desserts && itemData.desserts.map(
            ({id}) => (
              <li key={id}>
                {itemData.desserts}
                </li>
            )
          )
        } */}
            </ul>
            </div>
        </div>
      </article>
    </Layout>
  );
}
