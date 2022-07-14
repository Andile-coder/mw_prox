
drop owned by andilemasela;
CREATE TYPE typeInstance AS ENUM ('lxc','qemu');

CREATE TABLE Clusters(
    id      SERIAL PRIMARY KEY,
    name    varchar(100) NOT NULL UNIQUE,
    description varchar(200),
    baseURL varchar(100)
);
CREATE TABLE Nodes(
    id SERIAL PRIMARY KEY,
    clusterId varchar REFERENCES Clusters(name),
    nodeId VARCHAR(20) NOT NULL UNIQUE,
    status varchar(20)
);

CREATE TABLE instances(
    id      SERIAL PRIMARY KEY,
    vmid    VARCHAR(20) NOT NULL,
    name    VARCHAR(20) NOT NULL,
    node_id VARCHAR REFERENCES Nodes(nodeId),
    intanceType typeInstance,
    cores   INT,
    memory  INT,
    status  varchar(20),
    networks JSON,
    storage JSON
);

INSERT INTO Clusters (name,description,baseURL) VALUES('cluster name','cluster description','cluster url');
INSERT INTO Nodes (clusterId,nodeId,status) VALUES('cluster name','nodeDemoId','status');
INSERT INTO Instances (vmid,name,node_id,intanceType,cores,memory,status,networks,storage) VALUES('vmid','instanceName','nodeDemoId','lxc',23,100,'demostatus','[{"size":"gbo"},{"size":"gb"}]','[{"size":"gbo"},{"size":"gb"}]');


