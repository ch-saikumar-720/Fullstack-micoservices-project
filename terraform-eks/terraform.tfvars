region               = "us-east-1"
cluster_name         = "eks-public-cluster"
vpc_cidr             = "10.0.0.0/16"
public_subnet_cidr   = "10.0.1.0/24"
availability_zone    = "us-east-1a"

instance_types = ["t3.medium"]

desired_size = 2
min_size     = 1
max_size     = 3

key_name              = "microservervices-project"
bastion_instance_type = "t2.medium"
bastion_ami = "ami-0b6c6ebed2801a5cb"