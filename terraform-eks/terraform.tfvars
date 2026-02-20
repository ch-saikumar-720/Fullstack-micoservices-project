region               = "us-east-1"
cluster_name         = "eks-public-cluster"
vpc_cidr             = "10.0.0.0/16"
public_subnet_cidr   = "10.0.1.0/24"
availability_zone    = "us-east-1a"

instance_types = ["t3.medium"]

desired_size = 2
min_size     = 1
max_size     = 3

key_name              = "your-keypair-name"
bastion_instance_type = "t3.micro"
bastion_ami = ""