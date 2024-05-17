import React, { Component } from 'react';
import './TableCSS.css';
import Popup from './popup.js';
import { ButtonCheck, ButtonCross, ButtonDots } from './btn.jsx';
// import { faker } from '@faker-js/faker';

// function generateSampleRequests(numRequests) {
//   return Array.from({ length: numRequests }, () => {
//     const id = faker.number.int({ min: 1, max: 10000 });
//     const priority = faker.helpers.arrayElement(['High', 'Medium', 'Low']);
//     const group = faker.company.name();
//     const product = faker.commerce.productName();
//     const variants = Array.from({ length: 3 }, () => ({
//       concentration: faker.number.int({ min: 1, max: 100 }) + '%',
//       flavour: faker.commerce.productAdjective(),
//       weight: faker.number.int({ min: 1000, max: 5000 }) + 'g',
//       squirrels: faker.number.int({ min: 50, max: 100 }) + 'g'
//     }));
//     const address = faker.location.streetAddress();
//     const createdOn = faker.date.past().toLocaleDateString();
//     const deadline = faker.date.future().toLocaleDateString();
//     const assignedTo = faker.number.int({ min: 1, max: 10000 });
//     const deliveryTo = faker.location.city() + ', ' + faker.location.state();
//     const receiver = faker.company.name();
//     const sampleSize = faker.number.int({ min: 1, max: 5 }) + ' jars';
//     const application = faker.lorem.words();
//     const additionalInfo = faker.lorem.sentence();
//     const documents = Array.from({ length: 2 }, () => ({
//       name: faker.system.fileName(),
//       status: faker.helpers.arrayElement(['ok', 'pending', 'rejected'])
//     }));

//     return {
//       id,
//       priority,
//       group,
//       product,
//       variants,
//       address,
//       createdOn,
//       deadline,
//       assignedTo,
//       deliveryTo,
//       receiver,
//       sampleSize,
//       application,
//       additionalInfo,
//       documents
//     };
//   });
// }

const initialData = [
  {
    id: 101,
    priority: 'High',
    group: 'BIGYAY',
    products: [
      {
        name: 'Milk Concentrate Protein',
        variants: [
          { concentration: '70%', flavour: 'Vanilla', weight: '2500g', squirrels: '90g' },
          { concentration: '20%', flavour: 'Chocolate', weight: '2500g', squirrels: '90g' },
          { concentration: '10%', flavour: 'Apple', weight: '2500g', squirrels: '90g' }
        ]
      }
    ],
    address: '3761 Park Boulevard Way',
    createdOn: '11-02-2023',
    deadline: '17-02-2023',
    assignedTo: '#6363',
    deliveryTo: 'SAN FRANCISCO, CA',
    receiver: 'Marianos',
    sampleSize: '2 jars',
    application: 'Maple Extract',
    additionalInfo: 'Caller name test - different domain',
    documents: [
      { name: 'Tech requirements file 1.pdf' },
      { name: 'Tech requirements file 2.pdf' }
    ],
  },
  {
    id: 102,
    priority: 'High',
    group: 'VitaPlus',
    products: [
      {
        name: 'Plant based Protein',
        variants: [
          { concentration: '75%', flavour: 'Vanilla', weight: '2500g', squirrels: '90g' },
          { concentration: '25%', flavour: 'Chocolate', weight: '500g', squirrels: '90g' }
        ]
      },
      {
        name: 'BCAA',
        variants: [
          { concentration: '48%', flavour: 'Apple', weight: '800g', squirrels: '60g' }
        ]
      },
      {
        name: 'Creatine',
        variants: [
          { concentration: '95%', flavour: 'Apple', weight: '1000g', squirrels: '60g' },
          { concentration: '82%', flavour: 'Chocolate', weight: '400g', squirrels: '80g' }
        ]
      }
    ],
    address: '501 E 32 ST',
    createdOn: '11-02-2023',
    deadline: '17-02-2023',
    assignedTo: '#6363',
    deliveryTo: 'LOS ANGELES, CA',
    receiver: 'Walmart Inc.',
    sampleSize: '2 jars',
    application: 'Fruit Pulps',
    additionalInfo: 'Caller name test',
    documents: [
      { name: 'Tech requirements file 3.pdf' },
      { name: 'Tech requirements file 4.pdf' }
    ],
  },
  {
    id: 103,
    priority: 'High',
    group: 'BIGYAY',
    products: [
      {
        name: 'BCAA',
        variants: [
          { concentration: '75%', flavour: 'Vanilla', weight: '2500g', squirrels: '90g' },
        ]
      },
      {
        name: 'Omega 3',
        variants: [
          { concentration: '75%', flavour: 'Vanilla', weight: '2500g', squirrels: '90g' },
        ]
      }
    ],
    address: '400 E 33 ST',
    createdOn: '11-02-2023',
    deadline: '17-02-2023',
    assignedTo: '#6363',
    deliveryTo: 'CHICAGO, IL',
    receiver: 'ONN Nutrition',
    sampleSize: '2 jars',
    application: 'Protein powder',
    additionalInfo: 'Different domain',
    documents: [
      { name: 'Tech requirements file 5.pdf' },
      { name: 'Tech requirements file 6.pdf' }
    ],
  },
  {
    id: 104,
    priority: 'High',
    group: 'BIGYAY',
    products: [
      {
        name: 'Milk Concentrate Protein',
        variants: [
          { concentration: '75%', flavour: 'Vanilla', weight: '2500g', squirrels: '90g' },
        ]
      }
    ],
    address: '10 W 33 ST',
    createdOn: '11-02-2023',
    deadline: '17-02-2023',
    assignedTo: '#6363',
    deliveryTo: 'SEDONA, AZ',
    receiver: 'Amazing Brand Inc.',
    sampleSize: '3 boxes',
    application: 'Spice Ingredients',
    additionalInfo: 'lorem ipsem',
    documents: [
      { name: 'Tech requirements file 7.pdf' },
      { name: 'Tech requirements file 8.pdf' }
    ],
  },
  {
    id: 105,
    priority: 'High',
    group: 'BIGYAY',
    products: [
      {
        name: 'Turmeric',
        variants: [
          { concentration: '75%', flavour: 'Powdered Curcuma Longa', weight: '2500g', squirrels: '90g' },
        ]
      }
    ],
    address: '10 W 33 ST',
    createdOn: '11-02-2023',
    deadline: '17-02-2023',
    assignedTo: '#6363',
    deliveryTo: 'SEDONA, AZ',
    receiver: 'Amazing Brand Inc.',
    sampleSize: '3 boxes',
    application: 'Cookie Doughs',
    additionalInfo: 'lorem ipsem',
    documents: [
      { name: 'Tech requirements file 9.pdf' },
      { name: 'Tech requirements file 10.pdf' }
    ],
  },
  {
    id: 106,
    priority: 'Low',
    group: 'BIGYAY',
    products: [
      {
        name: 'Chilli Powder',
        variants: [
          { concentration: '75%', flavour: 'Fresno', weight: '2500g', squirrels: '90g' },
        ]
      }
    ],
    address: '10 W 33 ST',
    createdOn: '11-02-2023',
    deadline: '17-02-2023',
    assignedTo: '#6363',
    deliveryTo: 'MANHATTAN, NY',
    receiver: 'Patel Brothers',
    sampleSize: '20 boxes',
    application: 'Spice Ingredients',
    additionalInfo: 'lorem ipsem',
    documents: [
      { name: 'Tech requirements file 11.pdf' },
      { name: 'Tech requirements file 12.pdf' }
    ],
  },
  {
    id: 107,
    priority: 'Low',
    group: 'COSMETICS',
    products: [
      {
        name: 'Aloe vera',
        variants: [
          { concentration: '75%', flavour: 'Aloe Extract', weight: '2500g', squirrels: '90g' },
        ]
      }
    ],
    address: '10 W 33 ST',
    createdOn: '11-02-2023',
    deadline: '17-02-2023',
    assignedTo: '#6363',
    deliveryTo: 'SEATTLE, WA',
    receiver: 'The Home Depot',
    sampleSize: '30 bottles',
    application: 'Body Works',
    additionalInfo: 'lorem ipsem',
    documents: [
      { name: 'Tech requirements file 13.pdf' },
      { name: 'Tech requirements file 14.pdf' }
    ],
  },
  {
    id: 108,
    priority: 'High',
    group: 'SNACKS',
    products: [
      {
        name: 'Fruit Loops',
        variants: [
          { concentration: '75%', flavour: 'Vanilla', weight: '2500g', squirrels: '90g' },
        ]
      }
    ],
    address: '10 W 33 ST',
    createdOn: '11-02-2023',
    deadline: '17-02-2023',
    assignedTo: '#6363',
    deliveryTo: 'COLUMBUS, OH',
    receiver: 'Great Farms Inc.',
    sampleSize: '10 boxes',
    application: 'breakfast cereal',
    additionalInfo: 'lorem ipsem',
    documents: [
      { name: 'Tech requirements file 15.pdf' },
      { name: 'Tech requirements file 16.pdf' }
    ],
  },
];

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: initialData,
      // data: generateSampleRequests(10),
      selectedId: null,
      popupVisible: false,
      popupPosition: { top: 0, left: 0 },
      editedData: null,
      searchQuery: '',
      sortColumn: null,
      sortDirection: 'asc',
    };
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleBodyClick);
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (this.state.popupVisible) {
      this.setState({ popupVisible: false });
    }
  };

  handleBodyClick = () => {
    if (this.state.popupVisible) {
      this.setState({ popupVisible: false });
    }
  };

  handleSelect = (id) => {
    this.setState((prevState) => ({
      selectedId: prevState.selectedId === id ? null : id,
    }));
  };

  handleReject = (id) => {
    this.setState((prevState) => ({
      data: prevState.data.filter((rowData) => rowData.id !== id),
      selectedId: prevState.selectedId === id ? null : prevState.selectedId,
    }));
  };

  openOptions = (id, event) => {
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    const top = rect.bottom + scrollY;
    this.setState({
      popupPosition: { top, left: rect.left },
      popupVisible: true,
    });
  };

  handleClosePopup = () => {
    this.setState({ popupVisible: false });
  };

  onEditRequest = (id) => {
    // const newData = this.state.data.map((row) =>
    //   row.id === id ? { ...row, editable: !row.editable } : row
    // );
    // this.setState({ data: newData });
  };

  handleSearchInputChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  //this is used to sort the table by using "<>""
  handleSort = (column) => {
    const { sortDirection, sortColumn } = this.state;
    let newSortDirection = 'asc';

    let sortedData = [...initialData];

    if (sortColumn === column && sortDirection === 'asc') {
      newSortDirection = 'desc';
    }

    sortedData.sort((a, b) => {
      if (a[column] < b[column]) return newSortDirection === 'asc' ? -1 : 1;
      if (a[column] > b[column]) return newSortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    this.setState({ data: sortedData, sortDirection: newSortDirection, sortColumn: column });
  };

  renderProductVariants(variants) {
    return (
      <table className="table table-bordered table-striped mt-2">
        <thead className="thead-dark">
          <tr className='ViewSection'>
            <th colSpan="4" className="text-center View">View all</th>
          </tr>
          <tr className='Title'>
            <th className="text-center">% concentration</th>
            <th className="text-center">Flavour</th>
            <th className="text-center">Weight</th>
            <th className="text-center">Squirrels</th>
          </tr>
        </thead>
        <tbody>
          {variants.map((variant, index) => (
            <tr key={index}>
              <td className="text-center">{variant.concentration}</td>
              <td className="text-center">{variant.flavour}</td>
              <td className="text-center">{variant.weight}</td>
              <td className="text-center">{variant.squirrels}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  renderRows() {
    const { data, selectedId, popupVisible, popupPosition, searchQuery } = this.state;
    const filteredData = data.filter((rowData) => {
      const isSelectedIdMatch = selectedId ? rowData.id === selectedId : true;
      const doesFieldMatchSearch = Object.values(rowData)
        .join(' ')
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return isSelectedIdMatch && doesFieldMatchSearch;
    });
    return filteredData.map((rowData, rowIndex) => (
      <React.Fragment key={rowIndex}>
        {rowData.products.map((product, productIndex) => (
          <tr className="Main" key={productIndex}>
            {productIndex === 0 && (
              <>
                <td rowSpan={rowData.products.length}>{rowData.id}</td>
                <td rowSpan={rowData.products.length}>{rowData.priority}</td>
                <td rowSpan={rowData.products.length}>{rowData.group}</td>
              </>
            )}
            <td>{product.name}</td>
            <td>{this.renderProductVariants(product.variants)}</td>
            {productIndex === 0 && (
              <>
                <td rowSpan={rowData.products.length}>{rowData.address}</td>
                <td rowSpan={rowData.products.length}>{rowData.createdOn}</td>
                <td rowSpan={rowData.products.length}>{rowData.deadline}</td>
                <td rowSpan={rowData.products.length}>{rowData.assignedTo}</td>
                <td rowSpan={rowData.products.length}>{rowData.deliveryTo}</td>
                <td rowSpan={rowData.products.length}>{rowData.receiver}</td>
                <td rowSpan={rowData.products.length}>{rowData.sampleSize}</td>
                <td rowSpan={rowData.products.length}>{rowData.application}</td>
                <td rowSpan={rowData.products.length}>{rowData.additionalInfo}</td>
                <td rowSpan={rowData.products.length}>
                  {rowData.documents.map((doc, index) => (
                    <div key={index}>
                      <i className="bi bi-file-earmark" style={{ color: '#1A2C4B', backgroundColor: '#E8E9EA', borderRadius: '10px', fontSize: '10px', padding: '4px' }} /> {doc.name}
                    </div>
                  ))}
                </td>
                <td className='icons' rowSpan={rowData.products.length}>
                  <ButtonCheck onClick={() => this.handleSelect(rowData.id)} style={{ cursor: 'pointer' }} /><br></br>
                  <ButtonCross onClick={() => this.handleReject(rowData.id)} style={{ cursor: 'pointer' }} /><br></br>
                  <ButtonDots onClick={(event) => this.openOptions(rowData.id, event)} style={{ cursor: 'pointer' }} /><br></br>
                  {popupVisible && (
                    <Popup
                      onEditRequest={this.onEditRequest(rowData.id)}
                      position={popupPosition}
                      onClose={this.handleClosePopup}
                    />
                  )}
                </td>
              </>
            )}
          </tr>
        ))}
      </React.Fragment>
    ));
  }

  render() {
    return (
      <div className="container mt-5">
        <input
          className='searchbox'
          type="text"
          placeholder="Search..."
          value={this.state.searchQuery}
          onChange={this.handleSearchInputChange}
        />
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="thead-dark text-center">
              <tr className='Header'>
                <th onClick={() => this.handleSort('priority')} style={{ cursor: 'pointer' }}><i className="bi bi-chevron-expand" style={{ color: '#344054', fontSize: '15px' }}></i>ID</th>
                <th onClick={() => this.handleSort('priority')} style={{ cursor: 'pointer' }}><i className="bi bi-chevron-expand" style={{ color: '#344054', fontSize: '15px' }}></i>Priority</th>
                <th>Group</th>
                <th>Product Name</th>
                <th>Variants</th>
                <th>Address</th>
                <th onClick={() => this.handleSort('createdOn')} style={{ cursor: 'pointer' }}><i className="bi bi-chevron-expand" style={{ color: '#344054', fontSize: '15px' }}></i>Created on</th>
                <th onClick={() => this.handleSort('deadline')} style={{ cursor: 'pointer' }}><i className="bi bi-chevron-expand" style={{ color: '#344054', fontSize: '15px' }}></i>Deadline delivery</th>
                <th>Assigned to</th>
                <th>Delivery to</th>
                <th>Receiver</th>
                <th onClick={() => this.handleSort('sampleSize')} style={{ cursor: 'pointer' }}><i className="bi bi-chevron-expand" style={{ color: '#344054', fontSize: '15px' }}></i>Sample size</th>
                <th>Application</th>
                <th>Additional Info</th>
                <th>Documents</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{this.renderRows()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
