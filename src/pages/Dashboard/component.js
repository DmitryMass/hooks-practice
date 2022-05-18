import React, { useEffect, useState } from 'react';
import { deleteProject, editProject, getProjects } from '../../api';
import ConfirmationModal from '../../components/ConfirmationModal';
import EditModal from '../../components/EditModal';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [modalState, setModalState] = useState({
    isOpen: false,
    handleOk: () => {},
    handleCancel: () => {},
    title: '',
  });
  const [editModalState, setEditModalState] = useState();

  const editHandler = (id, name, description) => () => {
    setEditModalState({
      isOpen: true,
      title: `You editing a ${name} project`,
      name,
      description,
      handleOk: async (values) => {
        const body = new FormData();
        Object.entries(values).forEach(([key, value]) => {
          body.append(key, value);
        });

        const projects = await editProject(id, body);

        setProjects(projects);
        setEditModalState((prevState) => ({
          ...prevState,
          isOpen: false,
        }));
      },
      handleCancel: () => {
        setEditModalState((prevState) => ({
          ...prevState,
          isOpen: false,
        }));
      },
    });
  };

  const deleteHandler = (id, name) => () => {
    setModalState({
      isOpen: true,
      title: `Are you sure remove ${name} project`,
      handleCancel: () => {
        setModalState((prevState) => ({
          ...prevState,
          isOpen: false,
        }));
      },
      handleOk: async () => {
        const projects = await deleteProject(id);
        setProjects(projects);
        setModalState((prevState) => ({
          ...prevState,
          isOpen: false,
        }));
      },
    });
  };

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data);
      setIsLoading(false);
    });
  }, [setProjects, setIsLoading, getProjects]);

  return (
    <div>
      {isLoading ? (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <>
          <ConfirmationModal {...modalState} />
          <EditModal {...editModalState} />
          <ul className="projects">
            {projects.map((item) => {
              return (
                <li key={item.id}>
                  {item.name} - {item.description}
                  <div className="buttons">
                    <button
                      onClick={editHandler(
                        item.id,
                        item.name,
                        item.description
                      )}
                    >
                      ✎
                    </button>
                    <button onClick={deleteHandler(item.id, item.name)}>
                      ✖
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default Dashboard;
