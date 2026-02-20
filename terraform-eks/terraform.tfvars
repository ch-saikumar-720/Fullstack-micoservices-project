region               = "us-east-1"
cluster_name         = "eks-public-cluster"
vpc_cidr             = "10.0.0.0/16"
public_subnets = {
  subnet1 = {
    cidr = "10.0.1.0/24"
    az   = "us-east-1a"
  }
  subnet2 = {
    cidr = "10.0.2.0/24"
    az   = "us-east-1b"
  }
}

instance_types = ["t2.nano"]

desired_size = 1
min_size     = 1
max_size     = 2

key_name              = "microservervices-project"
bastion_instance_type = "t3.medium"
bastion_ami = "ami-0b6c6ebed2801a5cb"
