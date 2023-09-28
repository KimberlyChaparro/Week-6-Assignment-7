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
                {itemData.dessertList && itemData.dessertList.map(
            ({id, dessert}) => (
              <li key={id}>
                {dessert}
                </li>
            )
          )
        }
            </ul>
            </div>
        </div>
      </article>
    </Layout>
  );
}
